import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import useAuthenticated from '@services/hooks/useAuthenticated'
import { Anchor } from '@components/Menu/styles'

import { Header, Title, ModalList, ModalListItem, CloseAnchor } from './styles'

const customStyles = {
    content: {
        top: '20%',
        left: 'calc(50% - 150px)',
        right: 'auto',
        bottom: 'auto',
        width: 300
    }
}

const MobileModal = ({ isOpen, closeModal }) => {
    const isAuthenticated = useAuthenticated()

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
            <Header>
                <Title>Menu</Title>
                <CloseAnchor onClick={closeModal} href="#">
                    - Fechar
                </CloseAnchor>
            </Header>

            <ModalList>
                <ModalListItem>
                    <Anchor exact to="/" onClick={closeModal}>
                        - Dragon List
                    </Anchor>
                </ModalListItem>
                <ModalListItem>
                    <Anchor to="/new" onClick={closeModal}>
                        - Create Dragon
                    </Anchor>
                </ModalListItem>
                {isAuthenticated && (
                    <ModalListItem>
                        <Anchor to="/logout" onClick={closeModal}>
                            - Logout
                        </Anchor>
                    </ModalListItem>
                )}
            </ModalList>
        </Modal>
    )
}

MobileModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func
}

export default MobileModal
