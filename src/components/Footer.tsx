const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            Desarrollado por <span className="font-bold">Exe Godoy</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  