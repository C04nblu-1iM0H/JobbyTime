export const disabledScrollSteps = (start, step1, step2, step3, step4, isVerificationOfPayment) =>{
    if (start  || step1 || step2 || step3 || isVerificationOfPayment || step4) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return () => {
        document.body.classList.remove('no-scroll');
    };
}