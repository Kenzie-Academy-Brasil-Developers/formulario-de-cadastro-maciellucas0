import { FaTrashAlt } from "react-icons/fa";
import { api } from "../../Services/api";
import { LiTechs } from "./style";

const ListaTechs = ({ techs, setTech }) => {
  function removeTech(id) {
    console.log(id);

    api
      .post(`/users/techs/${id}`, {
        headers: `Bearer ${localStorage.getItem("@Context:token")}`,
      })
      .then(() => {
        const result = techs.filter((item) => id !== item.id);
        setTech(result);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      {techs.map((tecnologia) => (
        <LiTechs key={tecnologia.id}>
          <h2>{tecnologia.title}</h2>
          <p>{tecnologia.status}</p>
          <button onClick={() => removeTech(tecnologia.id)}>
            <FaTrashAlt />
          </button>
        </LiTechs>
      ))}
    </>
  );
};
export default ListaTechs;
