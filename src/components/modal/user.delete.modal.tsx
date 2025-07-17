import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { deleteUserPending } from '../../redux/user/user.slide';

const UserDeleteModal = (props: any) => {
    const { dataUser, isOpenDeleteModal, setIsOpenDeleteModal } = props;

    const handleSubmit = () => {
        console.log({ id: dataUser?.id });
        if(dataUser?.id){
            dispatch(deleteUserPending({
                id: dataUser?.id
                        }));
        }
    }
    const dispatch=useAppDispatch();
    const isDeleteSuccess=useAppSelector(state=>state.user.isDeleteSuccess);
    const isDelete=useAppSelector(state=>state.user.isDelete);
    useEffect(()=>{
        if(isDeleteSuccess){
            setIsOpenDeleteModal(false);
            toast.success("delete user success");
        }
        
        },[isDeleteSuccess])

    return (
        <Modal
            show={isOpenDeleteModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop={false}
            onHide={() => setIsOpenDeleteModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete A User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the user: {dataUser?.email ?? ""}
            </Modal.Body>
            <Modal.Footer>
                {isDelete===false ?
                <> 
                    <Button
                    variant='warning'
                    onClick={() => setIsOpenDeleteModal(false)} className='mr-2'>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Confirm</Button>
                </>:
                <>
                 <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                    </Button>
                </>
                }
               
            </Modal.Footer>
        </Modal>
    )
}

export default UserDeleteModal;