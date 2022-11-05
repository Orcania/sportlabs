/* eslint-disable jsx-a11y/label-has-associated-control */

import { useSelector, useDispatch } from 'react-redux';

import { Dialog } from 'primereact/dialog';
import { close_modal } from 'src/redux/actions/modalActions';

import modals from 'src/static/app.modals';

const ExampleModal = () => {
    // redux
    const modal = useSelector(state => state.modalReducer[modals.EXAMPLE_MODAL]);

    const { data } = modal;

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(close_modal());
    };

    return (
        <Dialog
            visible={modal.isOpen}
            header="Example modal"
            draggable={false}
            onHide={closeModal}
            className="resize-manager"
            headerClassName="has-bg-hpurple has-text-white"
            modal
        >
            <div className="box has-background-dark p-5 has-border-2-hblue-o-2">
                <div className="container">
                    <h1 className="subtitle has-text-hpurple">Modal</h1>
                    <hr className="has-background-hblue-o-2" style={{ margin: '0 -24px 0 -24px' }} />
                    <section className="pt-5 mb-6">
                        <p className="has-text-hpurple">{data && data.msg}</p>
                    </section>

                    <div className="has-text-centered">
                        <button className="button  is-white" type="button" onClick={closeModal}>
                            close
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ExampleModal;
