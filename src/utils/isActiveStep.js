export const isActiveStep = (stepId, done) => {
    const {stepDone1, stepDone2, stepDone3} = done
    if (stepId === 1 && stepDone1) return true;
    if (stepId === 2 && stepDone1 && stepDone2) return true;
    if (stepId === 3 && stepDone1 && stepDone2 && stepDone3) return true;
    return false;
};