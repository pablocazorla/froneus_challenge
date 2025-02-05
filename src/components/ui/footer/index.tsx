import Container from "@/components/ui/container";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full z-10">
      <Container className="h-11 flex items-center justify-center border-t border-gray-300">
        <div className="text-center text-xs text-gray-600">
          Froneus Challenge - {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
