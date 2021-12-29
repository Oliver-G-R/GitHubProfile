export const CardProfile = ({
  avatar,
  profileUrl,
  name,
  userName,
  followers,
  following,
  publicRepos

}) => {
  return (
        <>
            <section>
                <header>
                    <div className="container-avatar">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="user-name-content">
                        <h2>{name}</h2>
                        <a target="_blank" href={profileUrl} rel="noreferrer">{userName}</a>
                    </div>
                </header>

                <article>
                    <div>
                        <h3>Followers</h3>
                        <p>{followers}</p>
                    </div>
                    <div>
                        <h3>Following</h3>
                        <p>{following}</p>
                    </div>
                    <div>
                        <h3>Public Repos</h3>
                        <p>{publicRepos}</p>
                    </div>
                </article>
            </section>

            <style jsx>{`
                section{
                    border-radius: 2rem;
                    padding: 3rem;
                    background-color: var(--color-secondary);
                    margin-top: 2rem;
                    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);


                    header{
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        gap: 2rem;
                    }

                    .container-avatar{
                        width: 10rem;
                        height: 10rem;
                        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
                        overflow: hidden;
                        border-radius: 20%;
                        background-color: var(--color-primary);

                        img{
                            height: 100%;
                        }
                    } 

                    .user-name-content{
                        a{
                            display: block;
                            text-align: center;
                            padding: .5rem;
                            margin-top: 2rem;
                            background-color: var(--color-tertiary);
                            border-radius: .5rem;
                            color: var(--text-color-btn);
                            transition: all 0.3s ease-in-out;

                            &:hover{
                                opacity: .8;
                            }
                        }
                    }
                }
                
                section{
                    article{
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        background: var( --bg-radial);
                        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
                        margin-top: 4rem;
                        gap:2rem;
                        padding: 2.5rem 3rem;
                        border-radius: 2rem;

                        p{
                            font-weight: 700;
                            margin-top: 1.5rem;
                            font-size: 2.5rem;
                            color: var(--text-color-primary)
                        }
                    }
                }
            `}</style>
        </>
  )
}
