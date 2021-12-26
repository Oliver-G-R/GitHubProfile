export const CardProfile = ({
    avatar,
    profileUrl,
    name,
    userName,
    followers,
    following,
    publicRepos,

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
                        <a target="_blank" href={profileUrl}>{userName}</a>
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

                    header{
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        gap: 2rem;
                    }

                    .container-avatar{
                        width: 10rem;
                        height: 10rem;
                        overflow: hidden;
                        border-radius: 100%;
                        background-color: var(--color-primary);

                        img{
                            height: 100%;
                        }
                    } 

                    .user-name-content{
                        line-height: 3rem;
                        a{
                            color: var(--text-color-seconday)
                        }
                    }
                }
                
                section{
                    article{
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        margin-top: 2rem;
                        gap:2rem;
                        background-color: var(--color-primary);
                        padding: 2rem;
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
