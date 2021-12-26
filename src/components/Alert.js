export const Alert = ({children, type}) => {
    const bgAlert = () => {
        const tyAlerts = {
            "warning": "#ff7e35",
            "danger": "#ff5656"
        }

        return tyAlerts[type] ||"#474645"
    }
    return (
        <>
            <div >
                {children}
            </div>

            <style jsx>{`
                div{
                    width: 100%;
                    padding: 2rem;
                    margin-top: 2rem;
                    color: var(--text-color-primary);
                    border-radius: 1rem;
                    background-color: ${bgAlert()};
                    font-weight: 700;
                }
            `}</style>
        </>
    )
}
