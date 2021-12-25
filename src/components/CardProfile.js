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
            <section className="section-profile">
                <header className="section-profile__header-info">
                    <div className="section-profile__container-avatar">
                        <img className="section-profile__avatar" src={avatar} alt="Avatar" />
                    </div>
                    <div className="section-profile__userName">
                        <h2>{name}</h2>
                        <a target="_blank" href={profileUrl}>{userName}</a>
                    </div>
                </header>
    
                <article className="section-profile__card-info-social">
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
                .section-profile {
                    border-radius: 2rem;
                    padding: 3rem;
                    background-color: var(--color-secondary);
                    margin-top: 2rem;
                }

                .section-profile__header-info{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 2rem;
                } 

                .section-profile__container-avatar{
                    width: 10rem;
                    height: 10rem;
                    overflow: hidden;
                    border-radius: 100%;
                } 

                .section-profile__avatar{
                    height: 100%;
                }

                .section-profile__userName{
                    line-height: 3rem;
                }

                .section-profile__card-info-social{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-top: 2rem;
                    gap:2rem;
                    background-color: var(--color-primary);
                    padding: 2rem;
                    border-radius: 2rem;
                }

                .section-profile__card-info-social p{
                    font-weight: 700;
                    margin-top: 1.5rem;
                    font-size: 2.5rem;
                    color: var(--text-color-primary)
                }
            `}</style>
        </>
    )
}
