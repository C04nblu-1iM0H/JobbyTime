import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { API, LinkedAuth } from "../../../const";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../../store/tokenSlice";
import { useNavigate } from "react-router-dom";

function SignupButtons({ buttons }) {
    const [stateCode, setStateCode] = useState(LinkedAuth.STATE);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLinkedInHandled = useRef(false);

    const googleAuthorization = useMutation({
        mutationFn: async ({response}) => {
            if (response.credential) {
                const id_token = response.credential;
                
                const res = await fetch(API.AUTHORIZATION_GOOGLE, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: id_token, 
                    })
                });
                return res.json();
            }
        },
        onSuccess: (data) => {
            dispatch(setAccessToken(data.access_token));
            navigate('/onboard');
        },
        onError: (error) => {
            console.error("Error adding user:", error);
        },
    });

    const handleCredentialResponse = async (response) => {
        await googleAuthorization.mutateAsync({response});
    };

    useEffect(() => {
        window.google?.accounts.id.initialize({
            client_id: "732922080775-tsfrtkqc6og77qp3c46d5mammp6jqsq5.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        });

        window.google?.accounts.id.renderButton(
            document.getElementById("google-hidden-button"),
            {
                size: "large",
                type: "icon",
            }
        );
    }, []);

    

    const handleGoogleButtonClick = () => {


        const hiddenGoogleButton = document.getElementById("google-hidden-button");
    
        if (hiddenGoogleButton) {
            const googleButton = hiddenGoogleButton.querySelector(
                "div.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb"
            );
    
            if (googleButton) {
                googleButton.click();
                console.log("Клик выполнен по кнопке Google!");
            } else {
                console.error(
                    "Не удалось найти вложенный div с классом 'nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb'."
                );
            }
        } else {
            console.error("Скрытая Google кнопка не найдена.");
        }
    };

    const linkedinRedirectUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LinkedAuth.CLIENT_ID}&redirect_uri=${LinkedAuth.REDIRECT_URI}&state=${stateCode}&scope=openid%20profile%20email`


    const linkedInAuthorization = useMutation({
        mutationFn: async ({codeMatch, stateCode}) => {   
            const response = await fetch(API.AUTHORIZATION_LINKEDIN, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    code: codeMatch,
                    state: stateCode
                })
            });
            return response.json();
        },
        onSuccess: (response) => {
            console.log("User data:", response);
            dispatch(setAccessToken(response.access_token));
            navigate('/onboard');
        },
        onError: (error) => {
            console.error("Error adding user:", error);
        },
    });

    useEffect(() => {
        const handleLinkedInAuthorization = async () => {
            const windowUrl = window.location.href;

            if (windowUrl.includes("code=") && !isLinkedInHandled.current) {
                isLinkedInHandled.current = true; // Устанавливаем флаг в true
                const codeMatch = windowUrl.match(/code=([a-zA-Z0-9_\-]+)/)?.[1];

                if (codeMatch) {
                    try {
                        await linkedInAuthorization.mutateAsync({ codeMatch, stateCode });
                    } catch (error) {
                        console.error("LinkedIn Authorization Error:", error);
                    }
                }
            }
        };

        handleLinkedInAuthorization();
    }, [stateCode, linkedInAuthorization]); 

    const handleAuthorizationLinkedIn = () => {
        window.location.href = linkedinRedirectUrl
    };

    return (
        <ul className="signup__list">
            {buttons.map((button) => (
                <li className="signup__list__item" key={button.id}>
                    {button.id === 1 ? (
                        <>
                            <div 
                                id="google-button"
                                className="signup__list__item__button"
                                onClick={handleGoogleButtonClick}
                            >
                                <img
                                    className="signup__list__item__button__img"
                                    src={button.icon}
                                    alt="icon"
                                />
                                <span className="signup__list__item__button__text">
                                    {button.description}
                                </span>
                            </div>
                            <div
                                id="google-hidden-button"
                                style={{ display: "none" }} 
                            ></div>
                        </>
                    ) : (
                        <div
                            className="signup__list__item__button"
                            onClick={handleAuthorizationLinkedIn}
                        >
                            <img
                                className="signup__list__item__button__img"
                                src={button.icon}
                                alt="icon"
                            />
                            <span className="signup__list__item__button__text">
                                {button.description}
                            </span>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default SignupButtons;
