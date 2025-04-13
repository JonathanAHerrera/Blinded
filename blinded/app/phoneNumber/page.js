export default function PhoneNumber() {
    return (
      <div
        style={{
          backgroundImage: 'url("phoneNumber.jpeg")',
          backgroundSize: '60%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          height: '100vh',
          width: '100vw',
          position: 'relative',
        }}
      >
        {/* Popup message */}
        <div
          style={{
            position: 'absolute',
            top: '52vh',      // Relative to viewport height
            left: '50vw',     // Centered horizontally
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            border: '2px solid white',
            borderRadius: '8px',
            padding: '10px 15px',
            color: 'white',
            fontSize: '1.2vw',   // Responsive font size
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          }}
        >
          Gerry Cahn: 972-563-9017
        </div>
      </div>
    );
  }
  