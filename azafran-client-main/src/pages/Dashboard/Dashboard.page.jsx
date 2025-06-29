import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";
const { Title } = Typography;

const Dashboard = () => {
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch("http://localhost:8000/ingredients", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data);
      });
  }, []);

  return (
    <Flex vertical gap={"5px"}>
      <Title>Dashboard</Title>

      {ingredients.map((ingredient, index) => {
        return (
          <Ingredient
            name={ingredient.name}
            key={index}
            handleButtonClick={() => console.log(ingredient.name)}
          />
        );
      })}
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </Flex>
  );
};

export { Dashboard };
