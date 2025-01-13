import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { IoMdClose } from "react-icons/io";

import FormFieldProfile from "../form/FormFieldProfile/FormFieldProfile";
import PhoneInputComponent from "../form/PhoneInput/PhoneInput";
import DateInput from "../form/DataPicker/DateInput";
import StepStatus from "../StepStatus/StepStatus";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";
import Loader from "../loader/loader";

import { API, AppRouting } from "../../const";
import { setSteps } from "../../store/stepSlice";
import { setUserData } from "../../store/userSlice";
import { ValidateUserData } from "../../utils/validate";
import SelectComponent from "../form/SelectComponent/SelectComponent";
import { formatPhoneNumber } from "../../utils/service";

export default function UserFormModal({ width, SetActiveForm, setIsUserData }) {
  const dispatch = useDispatch();
  const currentRoute = useLocation().pathname;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    birthday: "",
    selectedCountry: "United States",
    state: "",
    city: "",
    postal: "",
    linkedIn: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.token.token);
  const userData = useSelector((state) => state.user.userData);
  const phoneFormat = formatPhoneNumber(formData.phoneNumber);

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        ...userData,
      }));
    }
  }, [userData]);

  

  const userDataMutate = useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post(API.UPDATE_USER_DATA, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: (response) => {
      Object.entries(response).forEach(([key, value]) => {
        dispatch(setUserData({ data: key, value: value || "" }));
      }); 
      if (currentRoute === AppRouting.Onboard) {
        dispatch(setSteps({ step: 'step0', value: false }));
        dispatch(setSteps({ step: 'step1', value: true }));
      }
    },
    onError: (error) => {
      console.error("Error sending data:", error);
    },
    onSettled: () => {
      if (currentRoute === AppRouting.ResumeBuilder) setIsUserData(true);
      setIsLoading(false);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };  

  const handleCountryCode = (value) => {
    setFormData((prevData) => ({ ...prevData, countryCode: value }));
  };

  const handleBirthday = (value) => {
    const formattedDate = value.toISOString().split('T')[0];
    setFormData((prevData) => ({ ...prevData, birthday: formattedDate}));
  };

  const handleClose = () => {
    if (SetActiveForm) SetActiveForm(false);
    if (currentRoute === AppRouting.Onboard) dispatch(setSteps({ step: "step0", value: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1);
  
    const isProfilePage = currentRoute === AppRouting.Profile;

    const validationErrors = ValidateUserData(
      formData.firstName,
      formData.lastName,
      formData.phoneNumber,
      formData.birthday,
      formData.state,
      formData.city,
      formData.postal,
      formData.linkedIn,
      isProfilePage
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "phoneNumber") value = value.replace(/\s/g, '');
      formDataToSend.append(key, value || "");
    });

    setIsLoading(true);
    userDataMutate.mutate(formDataToSend);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="modal">
      <div className="modal__profile-container" style={{ width }}>
        {currentRoute === AppRouting.Onboard && <StepStatus />}
        {currentRoute === AppRouting.Onboard && (<h1 className="modal__title">Confirm your data</h1>)}

        {currentRoute === AppRouting.Profile && (
            <div className="modal__profile-header">
                <h1 className="modal__title">My Profile Info</h1>
                <IoMdClose className="modal__close" onClick={handleClose} />
            </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="modal__form"
        >
          <div className="modal__form__basic">
            <FormFieldProfile
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              errors={errors.firstName}
            />
            <FormFieldProfile
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              errors={errors.lastName}
            />
            <PhoneInputComponent
              name="phoneNumber"
              code={formData.countryCode}
              value={phoneFormat}
              onChange={handleInputChange}
              onCountryCodeChange={handleCountryCode}
              placeholder="Enter your phone"
              errors={errors.phoneNumber}
            />
            <DateInput
              value={formData.birthday}
              onBirthdayChange={handleBirthday}
              errors={errors.birthday}
            />
          </div>
          {currentRoute === AppRouting.Profile && (<h3 className="modal__form__title">Location</h3>)}
          <div className="modal__form__basic">
            <SelectComponent 
              label="Country"
              value={formData.state}
              onChange={handleInputChange}
            />
            <FormFieldProfile
              label="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter your state"
              errors={errors.state}
            />
            <FormFieldProfile
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your city"
              errors={errors.city}
            />
            {currentRoute === AppRouting.Profile 
              ? (
                <FormFieldProfile
                  label="Postal"
                  name="postal"
                  value={formData.postal}
                  onChange={handleInputChange}
                  placeholder="enter your postal"
                  errors={errors.postal} 
                />
              ):(
                <FormFieldProfile
                  label="LinkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  placeholder="Enter your LinkedIn"
                  errors={errors.linkedIn}
                />
              ) 
            }
          </div>
          <section className="modal__footer">
            <ButtonComponent
              type="button"
              ClickFunction={handleClose}
              classNameButton="modal__footer__button-close"
              textButton="Close"
            />
            <ButtonComponent
              type="submit"
              classNameButton="modal__footer__button-save"
              textButton="Save"
            />
          </section>
        </form>
      </div>
    </section>
  );
}

