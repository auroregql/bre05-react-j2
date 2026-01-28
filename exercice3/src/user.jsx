const User =  (props) => {
    return (
    <article>
    <h2>Prénom et Nom de l'utilisateur {props.identity.firstName} {props.identity.lastName}</h2>
    <a href="auroregql@gmail.com">Email de l'utilisateur {props.identity.email}</a>
    </article>
    )
}

export default User;