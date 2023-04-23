import Link from 'next/link';

const ButtonStyles = {
  background: '#007bff',
  border: 'none',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  margin: '10px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
};

function index() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Link href="/query1">
            <button style={ButtonStyles}>View query1 result</button>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="/query2">
            <button style={ButtonStyles}>View query2 result</button>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="/query3">
            <button style={ButtonStyles}>View query3 result</button>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="/query4">
            <button style={ButtonStyles}>View query4 result</button>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="/query5">
            <button style={ButtonStyles}>View query5 result</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default index