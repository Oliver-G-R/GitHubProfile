export const ContentCardProjects = ({ children }) => {
  return (
       <>
            <section>
                <h2>
                    Repositories
                </h2>
                <div>{children}</div>
            </section>

            <style jsx>{`
                section{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 4rem 0;

                   div{
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        grid-gap: 2rem;
                        justify-items: center;
                        width: 100%;
                        margin-top: 2rem;
                   }
                }
            `}</style>
       </>
  )
}
