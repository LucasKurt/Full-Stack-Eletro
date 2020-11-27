import React from "react";

const Footer = () => {
    return(
        <footer className="d-flex flex-column justify-content-end align-items-center w-100 m-0 p-0">
            <h4 className="m-0 p-0 text-danger font-weight-bold text-monospace">Formas de Pagamento:</h4>
            <img className="m-0 p-0" src="./img/Cartoes.jpeg" alt="formas de pagamento" /><br />
            <p className="m-0 p-0">&copy; 2020 Storm Eletro Computing Inc. todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;