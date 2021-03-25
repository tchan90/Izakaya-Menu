import React from 'react';
import ReactModal from '../modals/ReactModal';

export default {
  title: 'Components/Modal',
  component: ReactModal,
  argTypes: {
    toggleModal: { action: 'toggled' },
  },
};

// Create template of how args map to rendering
const Template = (args) => (
  <>
    Background
    <ReactModal {...args}>{args.children}</ReactModal>
  </>
);

// Each story reuses that template
export const GeneralModal = Template.bind({});
GeneralModal.args = {
  showModal: true,
  toggleModal: () => {},
  children: (
    <div>
      Modal content{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        gravida volutpat ante, a consectetur nibh. Nullam tincidunt lectus at
        malesuada dapibus. Fusce dignissim lectus vitae pharetra semper. Proin
        vel commodo erat. Proin convallis lorem metus, in porta diam
        pellentesque at. Suspendisse sit amet tortor leo. Suspendisse vitae
        ipsum quam. Duis scelerisque vel mi sit amet scelerisque. Nulla id felis
        eget nunc efficitur malesuada eu eu quam. Vestibulum maximus aliquam
        orci, et vulputate lorem auctor vel. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse odio
        ipsum, tincidunt commodo sagittis non, dignissim ac eros. Mauris
        molestie eleifend elit ac suscipit. Vestibulum eget lectus et nulla
        pretium volutpat. Nulla facilisi.
      </p>
    </div>
  ),
};
