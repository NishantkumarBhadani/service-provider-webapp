const GradientButton = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all"
      >
        {children}
      </button>
    );
  };
  
  export default GradientButton;