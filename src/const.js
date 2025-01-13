import google from './assets/Signup/google.svg';
import linkedin from './assets/Signup/linkedin.svg';
import newIntegration from "./assets/integration/newIntegration.svg";
import lever from "./assets/integration/lever.svg";


const currentUrl = 'https://cb14-77-91-77-16.ngrok-free.app';

export const API = {
    SEND_VERIFY_CODE:`${currentUrl}/api/v1/send_verification_code`,
    REGISTRETION:`${currentUrl}/api/v1/registration`,
    REPEAT_SEND_VERIFY_CODE:`${currentUrl}/api/v1/send_repeat_verification_code`,
    GET_TOKEN:`${currentUrl}/api/v1/token`,
    PROTECTED_ROUTE:`${currentUrl}/api/v1/protected-route`,
    GET_BOARD:`${currentUrl}/api/v1/leverco_postings`,
    GET_POSTING:`${currentUrl}/api/v1/get_posting`,
    RESUME_BUILDER:`${currentUrl}/api/v1/resume_builder`,
    RESUME_FROM:`${currentUrl}/api/v1/resume_form`,
    GET_APPLY_POSTING:`${currentUrl}/api/v1/get_apply_postings`,
    PUT_APPLYED:`${currentUrl}/api/v1/apply`,
    GET_APPLY_RESULTS:`${currentUrl}/api/v1/apply_results`,
    AUTHORIZATION_GOOGLE:`${currentUrl}/api/v1/auth_google`,
    AUTHORIZATION_LINKEDIN:`${currentUrl}/api/v1/auth_linkedin`,
    IS_BOT:`${currentUrl}/api/v1/check_bot`,
    USER_DATA:`${currentUrl}/api/v1/user_data`,
    UPDATE_USER_DATA:`${currentUrl}/api/v1/update_user_data`,
    ADD_TO_BLACKLIST:`${currentUrl}/api/v1/create_black_company`,
    GET_BLACKLIST:`${currentUrl}/api/v1/get_blacklist_companies`,
    DELETE_BLACKLIST_COMPANY:`${currentUrl}/api/v1/del_black_company`,

    UPDATE_LOCATION_USA:`${currentUrl}/api/v1/update_location_usa`,
    UPDATE_WORK_AUTHORIZATION:`${currentUrl}/api/v1/update_work_authorization`,
    UPDATE_TIMEZONE:`${currentUrl}/api/v1/update_timezone`,
    UPDATE_SECURITY_CLEARANCE:`${currentUrl}/api/v1/update_security_сlearance`,
    UPDATE_LEVEL_OF_CLEARANCE:`${currentUrl}/api/v1/update_level_of_clearance`,

    GET_STEPS:`${currentUrl}/api/v1/get_step_onbording`,
    UPDATE_STEPS:`${currentUrl}/api/v1/update_step_onbording`,

    CHOISE_POSTING:`${currentUrl}/api/v1/choice_posting`,
    GET_CHOISE_POSTING:`${currentUrl}/api/v1/get_choice_posting`, 
}

export const AppRouting = {
    Login : '/login',
    ForgotMyPassword: '/new-password',
    CheckingMail: '/checking-mail',
    PasswordСhange: '/password-change',
    Root : '/',
    Verify: '/verify-email',
    Onboard: '/onboard',
    Profile: '/profile',
    Questions: '/questions',
    ResumeBuilder: '/resume',
    CoverLetter: '#',
    AutoApply: '/auto-apply',
    AppliedResults: '/applied-results',
    JobBoard: '/job-board',
    Job: "/job-board/job",
    SavedJobs: '#',
    PrivatePolicy:"/privacy-policy",
    bot:"/is-bot",
    Integrations:"/integrations",
    NotFound : '*',
};

export const LinkedAuth = {
    REDIRECT_URI:'https://0f8b-46-147-100-132.ngrok-free.app/login',
    STATE:'odsivsodivhsoidhvspvjpdsovjs[zodvjih',
    CLIENT_ID:'77cd76fz23dmja'
}


export const AsideOnboard = {
    description :"Start from here" ,
    root:"/onboard",
    path: " M3.93821 5.54428C3.62784 5.54515 3.32039 5.48526 3.03364 5.36809C2.7469 5.25091 2.48655 5.07879 2.26768 4.86167L1.23837 3.95928C1.03788 3.78266 0.916713 3.53468 0.901523 3.26991C0.894002 3.13881 0.912726 3.00753 0.956626 2.88357C1.00053 2.7596 1.06874 2.64539 1.15738 2.54744C1.24601 2.44949 1.35334 2.36972 1.47322 2.31269C1.5931 2.25567 1.72319 2.2225 1.85606 2.21507C2.12441 2.20009 2.3878 2.29089 2.58829 2.46752L3.65742 3.4092C3.69224 3.44979 3.73511 3.4829 3.78341 3.5065C3.8317 3.5301 3.88439 3.54367 3.93821 3.54639C4.02754 3.54637 4.11322 3.5114 4.17647 3.44915L6.61509 1.15823C6.8109 0.983412 7.06818 0.890994 7.33206 0.900686C7.59595 0.910379 7.84555 1.02141 8.02764 1.21011C8.20973 1.39881 8.30989 1.65024 8.30677 1.91077C8.30364 2.1713 8.19747 2.42032 8.01091 2.60471L5.59051 4.87832C5.37304 5.09111 5.11515 5.25947 4.83161 5.37375C4.54808 5.48803 4.24448 5.54598 3.93821 5.54428ZM17.0999 3.2134C17.0999 2.94846 16.9932 2.69438 16.8034 2.50704C16.6135 2.3197 16.356 2.21445 16.0875 2.21445H10.6878C10.4193 2.21445 10.1618 2.3197 9.97189 2.50704C9.78202 2.69438 9.67536 2.94846 9.67536 3.2134C9.67536 3.47834 9.78202 3.73243 9.97189 3.91977C10.1618 4.10711 10.4193 4.21235 10.6878 4.21235H16.0875C16.356 4.21235 16.6135 4.10711 16.8034 3.91977C16.9932 3.73243 17.0999 3.47834 17.0999 3.2134ZM5.59051 10.206L8.01091 7.93244C8.19747 7.74805 8.30364 7.49903 8.30677 7.2385C8.30989 6.97797 8.20973 6.72654 8.02764 6.53784C7.84555 6.34914 7.59595 6.23811 7.33206 6.22842C7.06818 6.21872 6.8109 6.31114 6.61509 6.48596L4.17647 8.77688C4.11318 8.83931 4.02736 8.87438 3.93787 8.87438C3.84838 8.87438 3.76256 8.83931 3.69927 8.77688L2.62946 7.72066C2.43953 7.53326 2.18193 7.42798 1.91333 7.42798C1.64473 7.42798 1.38713 7.53326 1.1972 7.72066C1.00727 7.90806 0.900569 8.16223 0.900569 8.42725C0.900569 8.69227 1.00727 8.94644 1.1972 9.13384L2.26768 10.1894C2.70773 10.6233 3.3035 10.8685 3.92563 10.8716C4.54776 10.8747 5.14602 10.6355 5.59051 10.206ZM17.0999 8.54113C17.0999 8.27619 16.9932 8.02211 16.8034 7.83477C16.6135 7.64743 16.356 7.54218 16.0875 7.54218H10.6878C10.4193 7.54218 10.1618 7.64743 9.97189 7.83477C9.78202 8.02211 9.67536 8.27619 9.67536 8.54113C9.67536 8.80607 9.78202 9.06016 9.97189 9.2475C10.1618 9.43483 10.4193 9.54008 10.6878 9.54008H16.0875C16.356 9.54008 16.6135 9.43483 16.8034 9.2475C16.9932 9.06016 17.0999 8.80607 17.0999 8.54113ZM5.59051 15.5338L8.01091 13.2602C8.19747 13.0758 8.30364 12.8268 8.30677 12.5662C8.30989 12.3057 8.20973 12.0543 8.02764 11.8656C7.84555 11.6769 7.59595 11.5658 7.33206 11.5561C7.06818 11.5465 6.8109 11.6389 6.61509 11.8137L4.17647 14.1046C4.11322 14.1669 4.02754 14.2018 3.93821 14.2018C3.88439 14.1991 3.8317 14.1856 3.78341 14.162C3.73511 14.1384 3.69224 14.1052 3.65742 14.0647L2.58829 13.123C2.3878 12.9464 2.12441 12.8555 1.85606 12.8705C1.58771 12.8855 1.33639 13.0051 1.15738 13.2029C0.978367 13.4007 0.886334 13.6606 0.901523 13.9254C0.916713 14.1901 1.03788 14.4381 1.23837 14.6147L2.26633 15.5171C2.70644 15.9515 3.30249 16.1968 3.92495 16.2C4.54741 16.2031 5.14596 15.9637 5.59051 15.5338ZM17.0999 13.8689C17.0999 13.6039 16.9932 13.3498 16.8034 13.1625C16.6135 12.9752 16.356 12.8699 16.0875 12.8699H10.6878C10.4193 12.8699 10.1618 12.9752 9.97189 13.1625C9.78202 13.3498 9.67536 13.6039 9.67536 13.8689C9.67536 14.1338 9.78202 14.3879 9.97189 14.5752C10.1618 14.7626 10.4193 14.8678 10.6878 14.8678H16.0875C16.356 14.8678 16.6135 14.7626 16.8034 14.5752C16.9932 14.3879 17.0999 14.1338 17.0999 13.8689Z ",
};

export const AsideProfile = {
    profile:'My Profile',
    root:"/profile",
    path:"M6.75 9C4.26825 9 2.25 6.98175 2.25 4.5C2.25 2.01825 4.26825 0 6.75 0C9.23175 0 11.25 2.01825 11.25 4.5C11.25 6.98175 9.23175 9 6.75 9ZM9.9525 14.61C9.34275 15.2197 9 16.0462 9 16.9088V18H10.0912C10.9537 18 11.7803 17.6572 12.39 17.0475L17.4953 11.9423C18.168 11.2695 18.168 10.1775 17.4953 9.50475C16.8225 8.832 15.7305 8.832 15.0577 9.50475L9.9525 14.61ZM7.5 16.9088C7.5 15.6398 7.99425 14.4465 8.89125 13.5495L10.6733 11.7675C9.56625 10.9725 8.214 10.4992 6.75 10.4992C3.0285 10.5 0 13.5285 0 17.25C0 17.664 0.336 18 0.75 18H7.5V16.9088Z",
};

export const AsideAiTools = [
    { 
        path:[
           {icon:"M13.2798 4.19976L14.8431 3.41835C15.0643 3.3078 15.0643 2.9922 14.8431 2.88165L13.2798 2.10024L12.4984 0.536876C12.3878 0.315713 12.0722 0.315713 11.9617 0.536877L11.1803 2.10024L9.61689 2.88165C9.39573 2.9922 9.39573 3.3078 9.61689 3.41835L11.1803 4.19976L11.9617 5.76312C12.0722 5.98429 12.3878 5.98429 12.4984 5.76312L13.2798 4.19976Z"},
           {icon:"M15.497 5.27726C14.7833 6.43119 13.5064 7.2 12.05 7.2C9.81323 7.2 7.99999 5.38675 7.99999 3.15C7.99999 1.87773 8.58664 0.74248 9.50419 0H7.99999V0.00339205C7.82726 0.00131681 7.68124 0 7.63631 0H4.25006C2.18231 0 0.500061 1.68225 0.500061 3.75V14.25C0.500061 16.3177 2.18231 18 4.25006 18H11.7501C13.8178 18 15.5001 16.3177 15.5001 14.25V7.11375C15.5001 7.07116 15.4989 7.02876 15.497 6.98647V5.27726ZM5.75006 3.74925C6.57881 3.74925 7.25006 4.4205 7.25006 5.24925C7.25006 6.078 6.57881 6.74925 5.75006 6.74925C4.92131 6.74925 4.25006 6.078 4.25006 5.24925C4.25006 4.4205 4.92131 3.74925 5.75006 3.74925ZM3.69206 8.54325C3.77381 8.436 4.52681 7.49925 5.76956 7.49925C7.01231 7.49925 7.76381 8.43675 7.84631 8.54325C8.09831 8.87175 8.03606 9.34275 7.70681 9.59475C7.57031 9.699 7.40981 9.74925 7.25156 9.74925C7.02581 9.74925 6.80306 9.648 6.65531 9.45525C6.65531 9.45525 6.28256 8.99925 5.76956 8.99925C5.26028 8.99925 4.89204 9.4444 4.88306 9.45525C4.63106 9.7845 4.16156 9.8475 3.83156 9.59475C3.50306 9.3435 3.44081 8.8725 3.69206 8.54325ZM11.7501 15.75H4.25006C3.83531 15.75 3.50006 15.414 3.50006 15C3.50006 14.586 3.83531 14.25 4.25006 14.25H11.7501C12.1648 14.25 12.5001 14.586 12.5001 15C12.5001 15.414 12.1648 15.75 11.7501 15.75ZM11.7501 12.75H4.25006C3.83531 12.75 3.50006 12.414 3.50006 12C3.50006 11.586 3.83531 11.25 4.25006 11.25H11.7501C12.1648 11.25 12.5001 11.586 12.5001 12C12.5001 12.414 12.1648 12.75 11.7501 12.75Z"},
        ],
        root:'/resume', 
        description :'AI Resume Builder'
    },
    { 
        path:"M11.2778 17.9985C10.503 17.9985 9.7275 17.7038 9.13725 17.1135C8.565 16.542 8.25 15.7815 8.25 14.9722C8.25 14.163 8.565 13.4032 9.13725 12.831L12.297 9.672C12.5903 9.37875 13.0642 9.37875 13.3575 9.672C13.6507 9.96525 13.6507 10.4392 13.3575 10.7325L10.1978 13.8915C9.909 14.1802 9.75 14.5642 9.75 14.9722C9.75 15.3802 9.909 15.7642 10.1978 16.053C10.7948 16.6485 11.7638 16.6477 12.3593 16.053L16.3868 12.0255C16.5382 11.874 16.5382 11.6265 16.3868 11.475C16.2405 11.3288 15.984 11.328 15.8363 11.475L12.531 14.7803C12.2378 15.0735 11.7638 15.0735 11.4705 14.7803C11.1772 14.487 11.1772 14.013 11.4705 13.7197L14.7758 10.4145C15.489 9.702 16.7325 9.7005 17.4473 10.4145C18.183 11.151 18.183 12.3503 17.4473 13.086L13.4198 17.1135C12.8295 17.7038 12.054 17.9985 11.2785 17.9985H11.2778ZM7.245 9.303C6.8625 9.102 6.52125 8.82525 6.216 8.52L0.222 2.52525C0.08775 2.91075 0 3.31875 0 3.75V10.5C0 12.5708 1.67925 14.25 3.75 14.25H6.81225C6.9615 13.3155 7.39425 12.4522 8.07675 11.7697L10.356 9.4905C9.4125 9.8565 8.328 9.87 7.24575 9.303H7.245ZM17.778 2.52525C17.9123 2.91075 18 3.31875 18 3.75V8.9475C17.007 8.28975 15.7147 8.2035 14.6467 8.7015L14.5597 8.784C14.5125 8.72625 14.4705 8.664 14.4172 8.61075C13.836 8.0295 13.0163 7.842 12.273 8.03025L17.778 2.52525ZM16.9837 1.1985L10.5907 7.5915C10.1655 8.016 9.58275 8.22825 8.99925 8.229C8.4165 8.229 7.833 8.01675 7.40775 7.5915L1.01625 1.19775C1.701 0.465 2.66775 0 3.75 0H14.25C15.3322 0 16.2998 0.465 16.9837 1.19775V1.1985Z",
        root:'/cover', 
        description :'AI Cover Letter'
    },
    { 
        path:[
            {icon:"M7.58396 2.26717L6.14996 6.42292C6.11215 6.53636 6.04777 6.63911 5.96219 6.7226C5.8766 6.8061 5.77229 6.86793 5.65796 6.90292L1.51721 8.16592L5.67296 9.60367C5.78477 9.64093 5.88622 9.70401 5.96909 9.78779C6.05197 9.87158 6.11393 9.97372 6.14996 10.0859L7.47746 14.2334L8.84996 10.0859C8.88637 9.97204 8.94947 9.86852 9.03401 9.78398C9.11855 9.69944 9.22208 9.63633 9.33596 9.59992L13.4835 8.27317C13.4888 8.2717 13.4938 8.26943 13.4985 8.26642L9.33596 6.89992C9.22044 6.86298 9.11561 6.79858 9.03044 6.71224C8.94527 6.6259 8.88231 6.52019 8.84696 6.40417L7.58396 2.26717Z"},
            {icon:"M14.2044 17.8713C14.3286 17.9552 14.4751 18 14.625 17.9999C14.7752 17.9998 14.922 17.9545 15.0462 17.87C15.1704 17.7855 15.2664 17.6656 15.3217 17.5259L15.9525 15.9509L17.5275 15.3202C17.6649 15.2627 17.7822 15.1659 17.8647 15.0419C17.9472 14.918 17.9913 14.7724 17.9913 14.6234C17.9913 14.4745 17.9472 14.3289 17.8647 14.2049C17.7822 14.081 17.6649 13.9841 17.5275 13.9267L15.9525 13.2959L15.3217 11.7209C15.264 11.5838 15.1671 11.4668 15.0431 11.3845C14.9192 11.3022 14.7737 11.2583 14.625 11.2583C14.4762 11.2583 14.3307 11.3022 14.2068 11.3845C14.0829 11.4668 13.9859 11.5838 13.9282 11.7209L13.3005 13.2899L11.7345 13.8832C11.5962 13.9381 11.4772 14.0327 11.3924 14.155C11.3077 14.2774 11.261 14.422 11.2582 14.5708C11.2554 14.7196 11.2966 14.8659 11.3767 14.9914C11.4567 15.1168 11.5721 15.2158 11.7082 15.2759L13.2952 15.9442L13.9282 17.5289C13.984 17.6681 14.0802 17.7873 14.2044 17.8713ZM14.9136 5.09118C15.0454 5.19405 15.2078 5.24992 15.375 5.24992C15.5422 5.24992 15.7046 5.19405 15.8364 5.09118C15.9682 4.98832 16.0618 4.84436 16.1025 4.68217L16.368 3.61867L17.4315 3.35242C17.5936 3.31178 17.7376 3.21811 17.8404 3.08631C17.9433 2.9545 17.9991 2.79211 17.9991 2.62492C17.9991 2.45774 17.9433 2.29534 17.8404 2.16354C17.7376 2.03173 17.5936 1.93807 17.4315 1.89742L16.368 1.63117L16.1025 0.567671C16.0618 0.405501 15.9682 0.26156 15.8363 0.158711C15.7045 0.0558609 15.5421 0 15.375 0C15.2078 0 15.0454 0.0558609 14.9136 0.158711C14.7818 0.26156 14.6881 0.405501 14.6475 0.567671L14.3805 1.62217L13.3305 1.86592C13.1675 1.90364 13.0218 1.99474 12.9166 2.12475C12.8114 2.25477 12.7526 2.41623 12.7497 2.58347C12.7467 2.75071 12.7998 2.91413 12.9004 3.04775C13.001 3.18137 13.1434 3.27752 13.305 3.32092L14.3797 3.60967L14.6475 4.68217C14.6881 4.84436 14.7817 4.98832 14.9136 5.09118Z"},
            {icon:"M7.49996 15.7499C7.17594 15.7538 6.85937 15.6527 6.59763 15.4616C6.33589 15.2706 6.14304 15 6.04796 14.6902L4.83746 10.9049L1.04021 9.63442C0.733733 9.53198 0.467749 9.33478 0.280676 9.07129C0.0936036 8.8078 -0.00487431 8.49167 -0.000533828 8.16856C0.00380665 7.84544 0.110741 7.53207 0.304824 7.2737C0.498907 7.01533 0.770092 6.82534 1.07921 6.73117L4.84646 5.58067L6.11546 1.79017C6.20981 1.47883 6.40498 1.20767 6.67027 1.01936C6.93556 0.831055 7.25592 0.736272 7.58096 0.749921C7.90504 0.75036 8.22025 0.855743 8.47943 1.0503C8.73861 1.24485 8.92781 1.51811 9.01871 1.82917L10.1677 5.59042L13.9402 6.79792C14.2445 6.89998 14.509 7.09506 14.6964 7.3556C14.8839 7.61614 14.9847 7.92898 14.9847 8.24992C14.9847 8.57087 14.8839 8.88371 14.6964 9.14425C14.509 9.40479 14.2445 9.59986 13.9402 9.70192L10.161 10.9109L8.95196 14.6902C8.85688 15 8.66403 15.2706 8.40229 15.4616C8.14055 15.6527 7.82398 15.7538 7.49996 15.7499ZM6.14996 6.42292L7.58396 2.26717L8.84696 6.40417C8.88231 6.52019 8.94527 6.6259 9.03044 6.71224C9.11561 6.79858 9.22044 6.86298 9.33596 6.89992L13.4985 8.26642C13.4938 8.26943 13.4888 8.2717 13.4835 8.27317L9.33596 9.59992C9.22208 9.63633 9.11855 9.69944 9.03401 9.78398C8.94947 9.86852 8.88637 9.97204 8.84996 10.0859L7.47746 14.2334L6.14996 10.0859C6.11393 9.97372 6.05197 9.87158 5.96909 9.78779C5.88622 9.70401 5.78477 9.64093 5.67296 9.60367L1.51721 8.16592L5.65796 6.90292C5.77229 6.86793 5.8766 6.8061 5.96219 6.7226C6.04777 6.63911 6.11215 6.53636 6.14996 6.42292Z"},
        ],
        root:'/auto-apply',
        description :'AI Auto Apply'
    },
    { 
        path:"M15.0375 11.2882C15.0832 10.9649 15.0727 10.6432 15.0007 10.3259C14.9527 10.1129 15.0547 9.88269 15.2557 9.75294C15.6292 9.51219 15.9322 9.18444 16.1572 8.77944C16.371 8.39319 16.4827 7.94994 16.4805 7.50444C16.4827 7.05144 16.371 6.60819 16.1572 6.22194C15.933 5.81694 15.6292 5.48919 15.2557 5.24844C15.0547 5.11869 14.952 4.88919 15.0007 4.67469C15.1012 4.22994 15.0862 3.77544 14.9565 3.32169C14.709 2.46069 14.0212 1.77294 13.1595 1.52469C12.705 1.39569 12.2505 1.38144 11.8073 1.48119C11.592 1.52544 11.364 1.42644 11.2343 1.22544C10.9935 0.851941 10.6665 0.548941 10.2615 0.323941C9.4785 -0.109559 8.50425 -0.110309 7.7205 0.323941C7.317 0.548191 6.99 0.851191 6.74925 1.22469C6.6195 1.42569 6.39225 1.52844 6.1755 1.47969C5.733 1.38069 5.27775 1.39494 4.8225 1.52469C3.9615 1.77144 3.273 2.45994 3.027 3.32019C2.8965 3.77469 2.8815 4.23069 2.982 4.67469C3.03 4.88769 2.928 5.11794 2.727 5.24769C2.35275 5.48919 2.04975 5.81619 1.82475 6.22119C1.611 6.60744 1.49925 7.05069 1.5015 7.49619C1.49925 7.94919 1.611 8.39244 1.8255 8.77944C2.04975 9.18369 2.3535 9.51069 2.727 9.75144C2.928 9.88194 3.03075 10.1114 2.982 10.3252C2.9085 10.6469 2.89875 10.9747 2.94675 11.3032L0 14.2499H3.75V17.9999L7.3455 14.4044C7.4655 14.4997 7.5825 14.5987 7.72125 14.6759C8.11275 14.8927 8.55225 15.0014 8.991 15.0014C9.42975 15.0014 9.87 14.8927 10.2622 14.6752C10.4047 14.5964 10.5247 14.4959 10.647 14.3977L14.25 18.0007V14.2507H18L15.0375 11.2882ZM9.498 9.31044C9.2145 9.59394 8.838 9.74994 8.4375 9.74994C8.037 9.74994 7.6605 9.59394 7.377 9.31044L5.5095 7.44294L6.57 6.38244L8.4375 8.24994L11.5365 5.15094L12.597 6.21144L9.498 9.31044Z", 
        root:'/applied-results', 
        description :'AI Applied Results'
    },
]

export const AsideJobs = [
    { 
        path:[
            {icon:"M13.725 3.5999H12.9825C12.8259 2.83811 12.4114 2.15361 11.8089 1.66179C11.2064 1.16996 10.4528 0.900884 9.67502 0.899902L8.32502 0.899902C7.54729 0.900884 6.79366 1.16996 6.19118 1.66179C5.5887 2.15361 5.17419 2.83811 5.01752 3.5999H4.27502C3.38025 3.60097 2.52243 3.9569 1.88972 4.5896C1.25702 5.2223 0.901096 6.08013 0.900024 6.9749L0.900024 8.9999H17.1V6.9749C17.099 6.08013 16.743 5.2223 16.1103 4.5896C15.4776 3.9569 14.6198 3.60097 13.725 3.5999ZM6.42422 3.5999C6.56333 3.20644 6.82061 2.86556 7.16085 2.62391C7.5011 2.38226 7.9077 2.25163 8.32502 2.2499H9.67502C10.0924 2.25163 10.499 2.38226 10.8392 2.62391C11.1794 2.86556 11.4367 3.20644 11.5758 3.5999H6.42422Z"},
            {icon:"M9.67502 10.6199C9.67502 10.8109 9.60391 10.994 9.47732 11.129C9.35073 11.264 9.17905 11.3399 9.00002 11.3399C8.821 11.3399 8.64931 11.264 8.52273 11.129C8.39614 10.994 8.32502 10.8109 8.32502 10.6199V9.8999H0.900024V13.4999C0.901096 14.4543 1.25702 15.3693 1.88972 16.0442C2.52243 16.7191 3.38025 17.0988 4.27502 17.0999H13.725C14.6198 17.0988 15.4776 16.7191 16.1103 16.0442C16.743 15.3693 17.099 14.4543 17.1 13.4999V9.8999H9.67502V10.6199Z"},
        ],
        root:'/job-board',
        description :'Job Board'
    },
    { 
        path:"M1.75907 15.0559C2.0718 15.1972 2.41755 15.2356 2.75122 15.166C3.08488 15.0965 3.39098 14.9223 3.62956 14.6661L7.00001 11.1229L10.3705 14.6661C10.5276 14.8346 10.7148 14.9685 10.9213 15.0601C11.1277 15.1516 11.3493 15.199 11.5732 15.1994C11.8033 15.1987 12.031 15.1499 12.2432 15.0559C12.5585 14.9211 12.828 14.6888 13.0165 14.3896C13.205 14.0903 13.3038 13.738 13.2999 13.3785V3.82658C13.299 3.02413 12.997 2.25481 12.4602 1.68739C11.9233 1.11997 11.1955 0.800766 10.4363 0.799805L3.5637 0.799805C2.80451 0.800766 2.07667 1.11997 1.53984 1.68739C1.00301 2.25481 0.701021 3.02413 0.700112 3.82658V13.3785C0.696416 13.7383 0.795513 14.0908 0.984445 14.3901C1.17338 14.6894 1.44335 14.9214 1.75907 15.0559Z",
        root:'/save-jobs', 
        description :'Saved Jobs'
    },
];

export const TitleMenu ={
    user : 'User',
    tools : 'AI Tools',
    jobs: 'Jobs'
}

export const SignupButton = [
    {id:1, root: '/google', icon:google, description: 'SIGH UP WITH GOOGLE'},
    {id:2, root: '/linked', icon:linkedin, description: 'SIGH UP WITH LINKEDIN'},
];

export const bageStatus = [
    {id:1, statusName: "Great"},
    {id:2, statusName: "Well Done"},
    {id:3, statusName: "You are on the right way"},
]

export const inputs = [
    {title: "Application job title", type: "text", placeholder: "Specify application job title"},
    {title: "Minimum salary $/per year", type: "text", placeholder: "Specify minimum salary"},
    {title: "Website", type: "text", placeholder:"Link to your website"},
    {title: "LinkedIn", type: "text", placeholder:"Link to your LinkedIn profile"},
    {title: "GitHub", type: "text", placeholder:"Link to your GitHub profile"},
    {title: "Portfolio (link)", type: "text", placeholder:"Link to your Portfolio"},
];

export const checkboxing = [
    {label: "Full-time", key: "Full-time" },
    {label: "Project based", key: "Project" },
    {label: "Remote", key: "Remote" },
    {label: "Part-time", key: "Part-time" },
    {label: "Flexible", key: "Flexible" },
];

export const checkfilter = [
    {label: "Full-time", key: "Full-time" },
    {label: "Project based", key: "Project based" },
    {label: "Remote", key: "Remote" },
    {label: "Part-time", key: "Part-time" },
    {label: "Flexible", key: "Flexible" },
];

export const timeZones = [
    { value: 'Eastern Daylight Time', label: 'Eastern Daylight Time', location: 'Washington D.C.' },
    { value: 'Central Daylight Time', label: 'Central Daylight Time', location: 'Chicago' },
    { value: 'Mountain Daylight Time', label: 'Mountain Daylight Time', location: 'Denver' },
    { value: 'Mountain Standard Time', label: 'Mountain Standard Time', location: 'Phoenix' },
    { value: 'Pacific Daylight Time', label: 'Pacific Daylight Time', location: 'Los Angeles' },
    { value: 'Alaska Daylight Time', label: 'Alaska Daylight Time', location: 'Anchorage' },
    { value: 'Hawaii-Aleutian Standard Time', label: 'Hawaii-Aleutian Standard Time', location: 'Honolulu' },
];

export const SecurityClearanceLevel = [
    { id:1, value: 'None', label: 'None' },
    { id:2, value: 'Public Trust', label: 'Public Trust' },
    { id:3, value: 'Secret', label: 'Secret' },
    { id:4, value: 'TS/SSBI', label: 'TS/SSBI' },
    { id:5, value: 'TS/SCI', label: 'TS/SCI' },
    { id:6, value: 'TS/SCI - CI Poly', label: 'TS/SCI' },
];


export const countries = [
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+91", flag: "🇮🇳", name: "India" },
];


export const options= [
    {name:"Intership", description:"Intership"},
    {name:"entryLevel", description:"Entry Level & Just Graduated"},
    {name:"Junior", description:"Junior"},
    {name:"Mid-Level", description:"Middle"},
    {name:"Senior", description:"Senior"},
    {name:"Expert", description:"Expert"},
]


export const steps =  [
    {
        id:1,
        name:"Add Your Resume in .pdf Format",
        path:"M25.47 11.25H18C15.9325 11.25 14.25 9.5675 14.25 7.5V0.03C14.0488 0.01625 12.5975 0 12.3938 0H6.75C3.30375 0 0.5 2.80375 0.5 6.25V23.75C0.5 27.1963 3.30375 30 6.75 30H19.25C22.6963 30 25.5 27.1963 25.5 23.75V11.8562C25.5 11.6525 25.4838 11.4513 25.47 11.25ZM9.25 6.24875C10.6313 6.24875 11.75 7.3675 11.75 8.74875C11.75 10.13 10.6313 11.2487 9.25 11.2487C7.86875 11.2487 6.75 10.13 6.75 8.74875C6.75 7.3675 7.86875 6.24875 9.25 6.24875ZM5.82 14.2387C5.95625 14.06 7.21125 12.4987 9.2825 12.4987C11.3538 12.4987 12.6063 14.0612 12.7438 14.2387C13.1638 14.7863 13.06 15.5712 12.5113 15.9913C12.2838 16.165 12.0163 16.2487 11.7525 16.2487C11.3763 16.2487 11.005 16.08 10.7588 15.7588C10.7588 15.7588 10.1375 14.9987 9.2825 14.9987C8.4275 14.9987 7.81125 15.7513 7.805 15.7588C7.385 16.3075 6.6025 16.4125 6.0525 15.9913C5.505 15.5725 5.40125 14.7875 5.82 14.2387ZM19.25 26.25H6.75C6.05875 26.25 5.5 25.69 5.5 25C5.5 24.31 6.05875 23.75 6.75 23.75H19.25C19.9413 23.75 20.5 24.31 20.5 25C20.5 25.69 19.9413 26.25 19.25 26.25ZM19.25 21.25H6.75C6.05875 21.25 5.5 20.69 5.5 20C5.5 19.31 6.05875 18.75 6.75 18.75H19.25C19.9413 18.75 20.5 19.31 20.5 20C20.5 20.69 19.9413 21.25 19.25 21.25ZM18 8.75C17.31 8.75 16.75 8.19 16.75 7.5V1.1775C17.4088 1.555 18.0288 2.01 18.5813 2.56125L22.9363 6.91875C23.4888 7.47 23.9438 8.09 24.3213 8.74875L18 8.75Z",
    },
    {
        id:2,
        name:"Tailor Resume and Cover Letter to AI Matched Jobs",
        path:[
            {icon:"M21.875 5H20.6375C20.3764 3.73034 19.6855 2.58951 18.6814 1.76981C17.6773 0.950101 16.4212 0.501636 15.125 0.5L12.875 0.5C11.5788 0.501636 10.3227 0.950101 9.31859 1.76981C8.31445 2.58951 7.62361 3.73034 7.3625 5H6.125C4.63371 5.00179 3.204 5.59499 2.1495 6.6495C1.09499 7.704 0.501786 9.13371 0.5 10.625L0.5 14H27.5V10.625C27.4982 9.13371 26.905 7.704 25.8505 6.6495C24.796 5.59499 23.3663 5.00179 21.875 5ZM9.707 5C9.93884 4.34423 10.3676 3.7761 10.9347 3.37335C11.5018 2.97059 12.1795 2.75288 12.875 2.75H15.125C15.8205 2.75288 16.4982 2.97059 17.0653 3.37335C17.6324 3.7761 18.0612 4.34423 18.293 5H9.707Z"},
            {icon:"M15.125 16.7C15.125 17.0183 15.0065 17.3235 14.7955 17.5485C14.5845 17.7736 14.2984 17.9 14 17.9C13.7016 17.9 13.4155 17.7736 13.2045 17.5485C12.9935 17.3235 12.875 17.0183 12.875 16.7V15.5H0.5V21.5C0.501786 23.0907 1.09499 24.6157 2.1495 25.7405C3.204 26.8653 4.63371 27.4981 6.125 27.5H21.875C23.3663 27.4981 24.796 26.8653 25.8505 25.7405C26.905 24.6157 27.4982 23.0907 27.5 21.5V15.5H15.125V16.7Z"},
        ],
    },
    {
        id:3,
        name:"Start AI Auto Apply",
        path:[
            {icon:"M7.58396 2.26717L6.14996 6.42292C6.11215 6.53636 6.04777 6.63911 5.96219 6.7226C5.8766 6.8061 5.77229 6.86793 5.65796 6.90292L1.51721 8.16592L5.67296 9.60367C5.78477 9.64093 5.88622 9.70401 5.96909 9.78779C6.05197 9.87158 6.11393 9.97372 6.14996 10.0859L7.47746 14.2334L8.84996 10.0859C8.88637 9.97204 8.94947 9.86852 9.03401 9.78398C9.11855 9.69944 9.22208 9.63633 9.33596 9.59992L13.4835 8.27317C13.4888 8.2717 13.4938 8.26943 13.4985 8.26642L9.33596 6.89992C9.22044 6.86298 9.11561 6.79858 9.03044 6.71224C8.94527 6.6259 8.88231 6.52019 8.84696 6.40417L7.58396 2.26717Z"},
            {icon:"M14.2044 17.8713C14.3286 17.9552 14.4751 18 14.625 17.9999C14.7752 17.9998 14.922 17.9545 15.0462 17.87C15.1704 17.7855 15.2664 17.6656 15.3217 17.5259L15.9525 15.9509L17.5275 15.3202C17.6649 15.2627 17.7822 15.1659 17.8647 15.0419C17.9472 14.918 17.9913 14.7724 17.9913 14.6234C17.9913 14.4745 17.9472 14.3289 17.8647 14.2049C17.7822 14.081 17.6649 13.9841 17.5275 13.9267L15.9525 13.2959L15.3217 11.7209C15.264 11.5838 15.1671 11.4668 15.0431 11.3845C14.9192 11.3022 14.7737 11.2583 14.625 11.2583C14.4762 11.2583 14.3307 11.3022 14.2068 11.3845C14.0829 11.4668 13.9859 11.5838 13.9282 11.7209L13.3005 13.2899L11.7345 13.8832C11.5962 13.9381 11.4772 14.0327 11.3924 14.155C11.3077 14.2774 11.261 14.422 11.2582 14.5708C11.2554 14.7196 11.2966 14.8659 11.3767 14.9914C11.4567 15.1168 11.5721 15.2158 11.7082 15.2759L13.2952 15.9442L13.9282 17.5289C13.984 17.6681 14.0802 17.7873 14.2044 17.8713ZM14.9136 5.09118C15.0454 5.19405 15.2078 5.24992 15.375 5.24992C15.5422 5.24992 15.7046 5.19405 15.8364 5.09118C15.9682 4.98832 16.0618 4.84436 16.1025 4.68217L16.368 3.61867L17.4315 3.35242C17.5936 3.31178 17.7376 3.21811 17.8404 3.08631C17.9433 2.9545 17.9991 2.79211 17.9991 2.62492C17.9991 2.45774 17.9433 2.29534 17.8404 2.16354C17.7376 2.03173 17.5936 1.93807 17.4315 1.89742L16.368 1.63117L16.1025 0.567671C16.0618 0.405501 15.9682 0.26156 15.8363 0.158711C15.7045 0.0558609 15.5421 0 15.375 0C15.2078 0 15.0454 0.0558609 14.9136 0.158711C14.7818 0.26156 14.6881 0.405501 14.6475 0.567671L14.3805 1.62217L13.3305 1.86592C13.1675 1.90364 13.0218 1.99474 12.9166 2.12475C12.8114 2.25477 12.7526 2.41623 12.7497 2.58347C12.7467 2.75071 12.7998 2.91413 12.9004 3.04775C13.001 3.18137 13.1434 3.27752 13.305 3.32092L14.3797 3.60967L14.6475 4.68217C14.6881 4.84436 14.7817 4.98832 14.9136 5.09118Z"},
            {icon:"M7.49996 15.7499C7.17594 15.7538 6.85937 15.6527 6.59763 15.4616C6.33589 15.2706 6.14304 15 6.04796 14.6902L4.83746 10.9049L1.04021 9.63442C0.733733 9.53198 0.467749 9.33478 0.280676 9.07129C0.0936036 8.8078 -0.00487431 8.49167 -0.000533828 8.16856C0.00380665 7.84544 0.110741 7.53207 0.304824 7.2737C0.498907 7.01533 0.770092 6.82534 1.07921 6.73117L4.84646 5.58067L6.11546 1.79017C6.20981 1.47883 6.40498 1.20767 6.67027 1.01936C6.93556 0.831055 7.25592 0.736272 7.58096 0.749921C7.90504 0.75036 8.22025 0.855743 8.47943 1.0503C8.73861 1.24485 8.92781 1.51811 9.01871 1.82917L10.1677 5.59042L13.9402 6.79792C14.2445 6.89998 14.509 7.09506 14.6964 7.3556C14.8839 7.61614 14.9847 7.92898 14.9847 8.24992C14.9847 8.57087 14.8839 8.88371 14.6964 9.14425C14.509 9.40479 14.2445 9.59986 13.9402 9.70192L10.161 10.9109L8.95196 14.6902C8.85688 15 8.66403 15.2706 8.40229 15.4616C8.14055 15.6527 7.82398 15.7538 7.49996 15.7499ZM6.14996 6.42292L7.58396 2.26717L8.84696 6.40417C8.88231 6.52019 8.94527 6.6259 9.03044 6.71224C9.11561 6.79858 9.22044 6.86298 9.33596 6.89992L13.4985 8.26642C13.4938 8.26943 13.4888 8.2717 13.4835 8.27317L9.33596 9.59992C9.22208 9.63633 9.11855 9.69944 9.03401 9.78398C8.94947 9.86852 8.88637 9.97204 8.84996 10.0859L7.47746 14.2334L6.14996 10.0859C6.11393 9.97372 6.05197 9.87158 5.96909 9.78779C5.88622 9.70401 5.78477 9.64093 5.67296 9.60367L1.51721 8.16592L5.65796 6.90292C5.77229 6.86793 5.8766 6.8061 5.96219 6.7226C6.04777 6.63911 6.11215 6.53636 6.14996 6.42292Z"},
        ],
    },
]


export const jobs = [
    {
        id_posting: 1,
        text_posting: "Product Designer (senior)",
        categories:{
            team:"Sentry",
            commitment: [ "Full time", "Remotely"],
            location: "Dallas, TX",
            creationTime: "1 day ago",
        }
    },
    {
        id_posting: 2,
        text_posting: "UX/UI Middle Designer",
        categories:{
            team:"Forward",
            commitment: ["Partial"],
            location: "New York, NY",
            creationTime: "4 days ago",
        }
    },
    {
        id_posting: 3,
        text_posting: "Lead UX Designer",
        categories:{
            team:"Carta",
            commitment: [ "Project-Based", "Remotely"],
            creationTime: "4 days ago",
            location: "New York, NY",
        }
    },
    {
        id_posting: 4,
        text_posting: "Product UX/UI Designer (middle+/senior)",
        categories:{
            team:"Google",
            commitment: [ "Partial", "Remotely"],
            creationTime: "4 days ago",
            location: "New York, NY",
        }
    },
];

export const genders = [
    {id:1, value:"Male", label:"Male" },
    {id:2, value:"Female", label:"Female" },
    {id:3, value:"Non-Binary", label:"Non-Binary" },
    {id:4, value:"I prefer to self-describe", label:"I prefer to self-describe" },
    {id:5, value:"I don't wish to answer", label:"I don't wish to answer" },
];

export const ProtectedStatus = [
    {id:1, value:"I identify myself as one or more of the classifications  of protected veteran", label:"I identify myself as one or more of the classifications  of protected veteran" },
    {id:2, value:"I'm not a protected veteran", label:"I'm not a protected veteran" },
    {id:3, value:"I decline to self-identify", label:"I decline to self-identify" },
];

export const ethnicityQuestion = [
    {id:1, value:"Black or of African descent", label:"Black or of African descent" },
    {id:2, value:"East Asian", label:"East Asian" },
    {id:3, value:"Indigenous, American Indian or Alaska Native", label:"Indigenous, American Indian or Alaska Native" },
    {id:4, value:"Middle Eastern or North African", label:"Middle Eastern or North African" },
    {id:5, value:"South Asian", label:"South Asian" },
    {id:6, value:"Southeast Asian", label:"Southeast Asian" },
    {id:7, value:"I prefer to self-describe", label:"I prefer to self-describe" },
    {id:8, value:"I don't wish to answer", label:"I don't wish to answer" },
];


export const RacialQuestion = [
    {id:1, value:"Asexual", label:"Asexual" },
    {id:2, value:"Heterosexual", label:"Heterosexual" },
    {id:3, value:"Bisexual and/or Pansexual", label:"Bisexual and/or Pansexual" },
    {id:4, value:"Queer", label:"Queer" },
    {id:5, value:"Gay", label:"Gay" },
    {id:6, value:"I prefer to self-describe", label:"I prefer to self-describe" },
    {id:7, value:"Lesbian", label:"Lesbian" },
    {id:8, value:"I don't wish to answer", label:"I don't wish to answer" },
];

export const transgenders = [
    {id:1, value:"Yes", label:"Yes" },
    {id:2, value:"No", label:"No" },
    {id:3, value:"I prefer to self-describe", label:"I prefer to self-describe" },
    {id:4, value:"I don't wish to answer", label:"I don't wish to answer" },
];

export const ChronicQuestion = [
    {id:1, value:"Yes", label:"Yes" },
    {id:2, value:"I prefer to self-describe", label:"I prefer to self-describe" },
    {id:3, value:"No", label:"No" },
    {id:4, value:"I don't wish to answer", label:"I don't wish to answer" },
];

export const sponsorshipFuture = [
    {id:1, value:"Yes", label:"Yes" },
    {id:2, value:"No", label:"No" },
    {id:3, value:"Not Sure", label:"Not Sure" },
];

export const integrationsData = [
    {id:1, icon:lever, title: 'Lever.co', description: 'Connect to your Lever.co account to source candidates '},
    {id:2, icon:newIntegration, title: 'New integration', description: 'Write us for new integration: connect@jobbytime.com '},
    // {icon:googleIntegration, title: 'Crossbeam Copilot for Chrome', badge: 'Crossbeam', forSale:"for Sales", description: 'See existing & new Crossbeam partner overlaps while in your Chrome browser '},
    // {icon:salesforce, title: 'Crossbeam Copilot for Salesforce', badge: 'Crossbeam', forSale:"for Sales", description: 'Make partner data available directly in Salesforce '},
    // {icon:slack, title: 'Slack',  description: 'Query Crossbeam partner data with the /crossbeam Slack command and alert on new overlaps via public, private, or Slack Connect channels ',},
]


export const PolicyTitle = {
    title:"THIS PRIVACY POLICY HAS BEEN COMPILED TO BETTER SERVE THOSE WHO ARE \n" +
    "CONCERNED WITH HOW THEIR ‘PERSONALLY IDENTIFIABLE INFORMATION’ (PII) IS BEING\n" +
    "USED ONLINE. PII, AS DESCRIBED IN US PRIVACY LAW AND INFORMATION SECURITY, IS \n"+ 
    "INFORMATION THAT CAN BE USED ON ITS OWN OR WITH OTHER INFORMATION TO IDENTIFY,\n" +
    "CONTACT, OR LOCATE A SINGLE PERSON, OR TO IDENTIFY AN INDIVIDUAL IN CONTEXT.\n"+
    "PLEASE READ OUR PRIVACY POLICY CAREFULLY TO GET A CLEAR UNDERSTANDING OF HOW\n"+
    "WE COLLECT, USE, PROTECT OR OTHERWISE HANDLE YOUR PERSONALLY IDENTIFIABLE\n"+
    "INFORMATION IN ACCORDANCE WITH OUR WEBSITE."
};

export const PolicyMainContent =[
    {
        title:"What personal information do we collect from the people that visit our service?",
        description:`
            When ordering or registering on our site, as appropriate, you may be asked to enter your name,
            email address, mailing address, phone number, credit card information or other details to help you with your experience.
            We collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey.
            Provide us with feedback on our products or services`
    },
    {
        title:"How do we use your information?",
        description:`
            We may use the information we collect from you when you register, 
            make a purchase, sign up for our newsletter, respond to a survey or marketing communication,
            surf the website, or use certain other site features in the following ways: To personalize your
            experience and to allow us to deliver the type of content and product offerings in which you are
            most interested. To improve our website in order to better serve you.To allow us to better service
            you in responding to your customer service requests.To quickly process your transactions.
            To ask for ratings and reviews of services or products.To follow up with you after correspondence
            (live chat, email or phone inquiries). To share with authorized third-parties subject to your prior consent.`
    },
    {
        title:"How do we protect your information?",
        description:[
            {
                text:`Our website is scanned on a regular basis for security holes and known vulnerabilities
                in order to make your visit to our site as safe as possible.`
            },
            {
                text:`We use regular Malware Scanning.`
            },
            {
                text:`Your personal information is contained behind secured networks and is only accessible by
                a limited number of persons who have special access rights to such systems, and are required to
                keep the information confidential. In addition, all sensitive/credit information you supply
                is encrypted. We implement a variety of security measures when a user places an order enters,
                submits, or accesses their information to maintain the safety of your personal information.
                All transactions are processed through a gateway provider and are not stored or processed on our servers.`
            },
        ]
    },
    {
        title:"Do we use ‘cookies’?",
        description:[
            {
                text:
                    `Yes. Cookies are small files that a site or its service provider transfers to your computer’s
                    hard drive through your Web browser (if you allow) that enables the site’s or service provider’s
                    systems to recognize your browser and capture and remember certain information. 
                    For instance, we use cookies to help us remember and process the items in your shopping cart.
                    They are also used to help us understand your preferences based on previous or current site activity, 
                    which enables us to provide you with improved services. We also use cookies to help us compile aggregate 
                    data about site traffic and site interaction so that we can offer better site experiences and tools in the future.`
            },
            {
                text:
                    `We use cookies to: Help to remember and process the items in the shopping cart. 
                    Understand and save user’s preferences for future visits. You can choose to have 
                    your computer warn you each time a cookie is being sent, or you can choose to turn 
                    off all cookies. You do this through your browser settings. Since browser is a little
                    different, look at your browser’s Help Menu to learn the correct way to modify your cookies.`
            },
            {
                text:
                    `If users disable cookies in their browser: If you turn cookies off, some of the features that 
                    make your site experience more efficient may not function properly. Some of the features that make
                    your site experience more efficient and may not function properly.`
            },

        ]
    },
    {
        title:"Third-party disclosure",
        description:`
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless 
            we provide you with advance notice. In certain instances, we will also share information attributable to you regarding
            your engagement with our site, content, and services with authorized third-parties, subject to your prior consent. 
            This does not include website hosting partners and other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to keep this information confidential. We may also release
            information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ 
            rights, property or safety. However, non-personally identifiable visitor information may be provided to other parties for 
            marketing, advertising, or other uses.`
    },
    {
        title:"Third-party links",
        description:`
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. 
            These third-party sites have separate and independent privacy policies. We therefore have no responsibility 
            or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the
            integrity of our site and welcome any feedback about these sites.`
    },
    {
        title:"AUTOMATED DECISION-MAKING",
        description:`
            Automated decision-making refers to decisions made exclusively by automated means without any human involvement. 
            This may include, for example, an online assessment of your resume's compatibility with a posted job vacancy, 
            where the decision is made based on the information you've entered without any human intervention. 
            Jobbytime.com makes automated decisions using artificial intelligence, utilizing your personal data. 
            If you do not agree with Software making automated decisions, please do not use Software Jobbytime.com. 
            For any questions related to automated decision-making or termination of Jobbytime.com usage, please email 
            us at help@jobbytime.com Situations where Jobbytime.comjo (hereinafter "the System") makes automated decisions 
            using artificial intelligence with processing your personal data:`
    },
    {
        title:"During your registration on the Jobbytime.com website:",
        description:`
           When uploading a resume, the System extracts data and automatically fills in registration fields, 
           also saving user data to the database (prior to registration). When uploading a resume during the
           quiz (questionnaire) stage or in the personal account, the System automatically generates a new resume document using AI.`
    },
    {
        title:"At the time of payments:",
        description:`
           When you pay for any subscription, the System automatically registers internal accounts 
           on the necessary services (“Job providers”, as defined below).`
    },
    {
        title:"When generate cover letters:",
        description:`
            In the settings functions in your Personal Account, you have the option to request the System to generate cover letters. 
            The System will automatically prepare a cover letter based on your personal data entered into it and the job description.`
    },
    {
        title:`At the stage of submitting resumes to companies or other individuals who have posted vacancies (hereinafter "job applications"):`,
        description:`
            The System analyzes each vacancy using AI and provides a rating of resume-to-vacancy compatibility. 
            Simultaneously, the System prepares an AI-generated cover letter that will be automatically sent 
            along with the job application (if you have selected the option to prepare and send a cover letter 
            in your personal account settings). Before filling out forms, the System analyzes the similarity 
            between the vacancy and your data. If this parameter is higher than what you've set in your personal account, 
            the System adds this vacancy to the application queue. You can cancel the application submission within 24 hours 
            and/or modify the cover letter. When filling out each form, the System selects the best answer option to the question 
            asked in the form being filled out, using its internal algorithms. Also, if you have an account on the service where 
            the job application was sent, the System will automatically forward to your email address specified in the resume 
            any message from the employer in response to the job application.`
    },
    {
        title:`Job Providers:`,
        description:`
            Job providers are companies or platforms that aggregate and list job openings from various employers. 
            These platforms serve as intermediaries between job seekers and employers, offering a centralized location 
            where candidates can search for and apply to multiple job opportunities. Examples of such platforms include 
            job board websites or recruitment services. These Job providers often offer additional features such as resume posting, 
            job alerts, and sometimes their own AI-powered matching services to connect suitable candidates with relevant job openings. 
            In some cases, Job Providers prohibit the use of third-party automation on their services. In such instances, 
            manual management may be required. You can perform this manually on your own or contact us at help@jobbytime.com 
            for assistance.`
    },
    {
        title:`Does our site allow third-party behavioral tracking?`,
        description:`
           It’s also important to note that we do not allow third-party behavioral tracking.`
    },
    {
        title:`COPPA (Children Online Privacy Protection Act)`,
        description:`
           When it comes to the collection of personal information from children under the age of 13 years old, 
           the Children’s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade 
           Commission, United States’ consumer protection agency, enforces the COPPA Rule, which spells out what 
           operators of websites and online services must do to protect children’s privacy and safety online. 
           We do not specifically market to children under the age of 13 years old.`
    },
    {
        title:`Fair Information Practices`,
        description:`
           The Fair Information Practices Principles form the backbone of privacy law in the United States 
           and the concepts they include have played a significant role in the development of data protection 
           laws around the globe. Understanding the Fair Information Practice Principles and how they should be 
           implemented is critical to comply with the various privacy laws that protect personal information.`
    },
    {
        title:`In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:`,
        description:`
           We will notify you via email Within 7 business days We will notify the users via in-site notification Within 
           7 business days We also agree to the Individual Redress Principle which requires that individuals have the right to legally 
           pursue enforceable rights against data collectors and processors who fail to adhere to the law. 
           This principle requires not only that individuals have enforceable rights against data users, but also that 
           individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.`
    },
    {
        title:`In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:`,
        description:`
           The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, 
           gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.`
    },
    {
        title:"We collect your email address in order to:",
        description:[
            {
                text:
                    `Send information, respond to inquiries, and/or other requests or questions. 
                    Process orders and to send information and updates pertaining to orders. 
                    Send you additional information related to your product and/or service. 
                    Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.`
            },
            {
                text:
                    `To be in accordance with CANSPAM, we agree to the following:`
            },
            {
                text:
                    `Not use false or misleading subjects or email addresses. 
                    Identify the message as an advertisement in some reasonable way. 
                    Include the physical address of our business or site headquarters. 
                    Monitor third-party email marketing services for compliance, if one is used. 
                    Honor opt-out/unsubscribe requests quickly. Allow users to unsubscribe by using the link at the bottom of each email.`
            },
            {
                text:
                    `If at any time you would like to unsubscribe from receiving future emails, you can email us at`
            },
            {
                text:
                    `Follow the instructions at the bottom of each email.and we will promptly remove you from ALL correspondence.`
            },

        ]
    },
    {
        title:"Text Marketing",
        description:[
            {
                text:
                    `Text Marketing and notifications: By subscribing to text notifications you agree to receive 
                    recurring automated marketing text messages at the phone number provided. 
                    Consent is not a condition of purchase. 
                    Msg and data rates may apply. View Terms of use and privacy policy.`
            },
            {
                text:
                    `Transparency of Algorithms and Data Usage in Job Matching We are committed to maintaining 
                    transparency about the algorithms and criteria we use to match job seekers’ CVs with potential 
                    job opportunities. Our platform employs advanced data processing techniques to enhance your job 
                    search and application process.`
            },
            {
                text:
                    `Algorithmic Matching Process Our site uses a sophisticated algorithm designed to match 
                    job seekers with job opportunities that best fit their skills, experience, and preferences. 
                    This process involves analyzing the information provided in your CV and comparing it with the 
                    requirements and preferences listed by employers in their job postings.`
            },
            {
                text:
                    `Criteria for CV and Job Matching The matching algorithm takes into account several factors, including but not limited to:`
            },
            {
                text:
                    `Skills and Experience: Matching keywords and phrases related to skills, experience levels, 
                    and qualifications that appear in both your CV and job descriptions. Location Preferences: 
                    Geographical preferences and location details provided in your profile and job listings. 
                    Employment Type and Preferences: Type of employment sought (full-time, part-time, freelance) and other 
                    job preferences such as remote work options.`
            },
            {
                text:
                    `Industry and Sector: Alignment of your previous work sectors and the industries of potential employers.`
            },
            {
                text:
                    `User Rights to Information on CV Distribution As a user of jobbytime.com, you have the right to 
                    understand where your CV has been sent and the rationale behind these decisions made by our algorithm. 
                    To support this transparency:`
            },
            {
                text:
                    `Access to Information: You can access a log of all job applications made on your behalf, 
                    including the details of where your CV was sent. Decision Criteria Disclosure: Upon request, 
                    we can provide insights into how our algorithm matched your CV with specific job listings, 
                    detailing the criteria that led to these decisions. Control Over Data Sharing: You have the 
                    ability to adjust your preferences and consent settings to control how and where your CV is 
                    shared with potential employers. Ensuring Accuracy and Fairness: We regularly review and update 
                    our algorithms and data processing practices to ensure fairness, accuracy, and relevance in the 
                    job matching process. Our commitment to these principles means we strive to avoid biases and provide 
                    equal opportunities for all job seekers.`
            },
            {
                text:
                    `Regular Audits and Algorithm UpdatesWe conduct regular audits of our algorithms to identify 
                    and rectify any potential biases or inadvertent discriminatory practices. 
                    These audits help ensure that our algorithms function in a manner that is both fair and equitable to all users.`
            },
            {
                text:
                    `Criteria for Algorithmic Decisions Our algorithms are designed to prioritize relevance and 
                    qualifications over factors that could lead to biased outcomes. The criteria used include:`
            },
            {
                text:
                    `Professional qualifications and skills relevant to the job. Work experience and past job performance. 
                    Preferences stated by the job seekers themselves, such as desired job location and type.`
            },
            {
                text:
                    `Bias Detection and Correction To detect potential biases, we utilize advanced statistical and machine learning methods that analyze decision patterns and outcomes across different demographic groups. If any disparities are detected that could suggest bias:`
            },
            {
                text:
                    `We take immediate corrective action to adjust the algorithm accordingly. We review potentially affected user interactions and provide redress where appropriate.`
            },
            {
                text:
                    `Training and Awareness Our team receives ongoing training on issues related to bias, discrimination, and data ethics. This ensures that everyone involved in the development and maintenance of our algorithms is aware of their responsibilities towards promoting fairness. `
            },
            {
                text:
                    `User Feedback We actively encourage feedback from our users regarding the job matching process. 
                    This feedback is crucial for continually improving our algorithms and practices. Users can report 
                    concerns related to perceived discrimination or bias through our dedicated support channel at help@jobbytime.com.`
            },
            {
                text:
                    `Transparency and Accountability We are committed to transparency regarding how our 
                    job matching algorithms work and how decisions are made. Users can request detailed 
                    explanations of how their data was processed and how decisions were made regarding their job applications.`
            },
            {
                text:
                    `Data Storage and Security All personal data collected by jobbytime.com is stored securely on servers located within the territory of the United States. This localization aligns with our commitment to protect user data and to comply with applicable federal and state regulations concerning data protection.`
            },
            {
                text:
                    `Our servers are equipped with state-of-the-art security measures to prevent unauthorized access, alteration, disclosure, or destruction of your personal information. Regular security audits are conducted to ensure the integrity and security of our data storage and processing practices.`
            },
            {
                text:
                    `Compliance with General Data Protection Regulation (GDPR) For our users residing in the European Union, 
                    jobbytime.com adheres to the General Data Protection Regulation (GDPR), which sets guidelines for the collection 
                    and processing of personal information from individuals within the EU. Users within the EU have specific rights 
                    under GDPR, including the right to access their data, request corrections, request data deletion, object to processing, 
                    and the right to data portability.`
            },
            {
                text:
                    `Terms Specific to EU Users If you are accessing jobbytime.com from a location within the European Union, 
                    the following additional terms apply to you:`
            },
            {
                text:
                    `You have the right to be informed about the collection and use of your personal data.`
            },
            {
                text:
                    `You may request that we cease processing your data if you believe the processing infringes on your privacy rights.`
            },
            {
                text:
                    `You are entitled to lodge a complaint with a supervisory authority in your member state if you believe your rights under GDPR are being infringed.`
            },
            {
                text:
                    `Determining User Location To ensure compliance with local laws and regulations, 
                    jobbytime.com uses geolocation technology to determine whether a user is accessing 
                    our services from within the United States or from the EU. This technology helps us:`
            },
            {
                text:
                    `Apply the appropriate legal and regulatory framework based on the user’s location. 
                    Provide a personalized and compliant service experience to all our users.`
            },
        ]
    },
    {
        title:`Contacting Us`,
        description:`
            If there are any questions regarding this privacy policy, you may contact us via help@jobbytime.com`
    },
]


