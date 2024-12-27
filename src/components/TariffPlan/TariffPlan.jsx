import ListTariffPlan from "./ListTarifPlan";

export default function TariffPlan(){
    return(
        <section className="tariff-plan">
            <h2 className="tariff-plan__title">Your Plan</h2>
            <p className="tariff-plan__description">We commit to your career success. If you don't land an interview within 2 months, you will get your money back.</p>
            <ListTariffPlan />
        </section>
    )
}