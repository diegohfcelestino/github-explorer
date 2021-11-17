export function RepositoryItem(props) {
  return (
    <li>
      <strong>Nome: {props.repository.name}</strong>
      <h5>Descrição: {props.repository.description}</h5>
      <p>Linguagem: {props.repository.language}</p>
      <p>Criado em : {props.repository.created_at}</p>
      

      <a href={props.repository.html_url}>Acessar repositórios</a>
    </li>
  );
}