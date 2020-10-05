import React from 'react';
import './Style.css';

const UserPanel = (props) =>{
    const toggleModal = () =>{
        const userPanel = document.getElementById("userPanel");
        const userPanelParent = document.getElementById("userPanelParent");
        const userModal = document.getElementById("userModal");

        userPanel.classList.toggle("modal-active");
        userPanelParent.classList.toggle("modal-active-arrow");
        userModal.classList.toggle("modal-active-modal");
    }

    const disableModal = () =>{
        const userPanel = document.getElementById("userPanel");
        const userPanelParent = document.getElementById("userPanelParent");
        const userModal = document.getElementById("userModal");

        console.log("saiu");
    }
    return <div id="userPanelParent" onClick={toggleModal}>
        <p id="userPanel">{props.userName}...</p>
        <div id="userModal">
            <ul>
                <li>Sua lista</li>
                <li>Conta e configurações</li>
                <li>Assista onde quiser</li>
                <li>Ajuda</li>
                <li>Não é Mathews? Sair</li>
            </ul>
            <ul>
                <li>crianças</li>
                <li>Adicionar novo perfil</li>
                <li>Editar perfis</li>
                <li>Saiba mais</li>
            </ul>
        </div>
    </div>
}

export default UserPanel;