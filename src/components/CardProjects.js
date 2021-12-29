export const CardProjects = ({
  name,
  description,
  language,
  htmlurl
}) => {
  return (
       <>
            <a target="_blank" href={htmlurl} rel="noreferrer" >
                <header>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>
                </header>

                <footer>
                    <span>
                        {language}
                    </span>
                </footer>
            </a>

            <style jsx>{`
                a{
                    background:var(--bg-radial);
                    width: 100%;
                    padding: 2rem;
                    max-height: 200px;
                    overflow: hidden;
                    border-radius: 1rem;
                    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
                    transition: all 0.3s ease-in-out;
                    

                    header{
                        display: flex;
                        flex-direction: column;
                        line-height: 3rem;
                        

                        p{
                            color: var(--text-color-seconday);
                            
                        }
                    }
                    &:hover{
                    transform: translateY(-1rem);
                       opacity: .8;
                    }
                    footer span{
                        color:var(--color-tertiary);
                    }
                }
            `}</style>
       </>
  )
}
