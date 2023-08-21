import Modal from "./Modal";

export default {
    title: "components/Modal",
    component: Modal,
    args: {
        children: "Modal",
    }
};

const Template = (args)=> <Modal {...args} />;
export const Prymary = Template.bind({})