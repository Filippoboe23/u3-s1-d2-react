import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="mb-4 Hey">
      <Alert variant="info" className="text-center rounded-0">
        <h1>Welcome to MyShop!</h1>
        <p>Books, Books, BOOOOOOKS!!!</p>
      </Alert>
    </div>
  );
};

export default Welcome;
