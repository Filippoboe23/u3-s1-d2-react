import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-light py-3 mt-5">
      <Container className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </Container>
    </footer>
  );
};

export default MyFooter;
