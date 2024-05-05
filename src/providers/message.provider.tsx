import { Fragment, PropsWithChildren } from 'react';
import { message as antMessage } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

let message: MessageInstance;

antMessage.config({
  top: 100,
  duration: 3,
  maxCount: 3,
});

export const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messageApi, contextHolder] = antMessage.useMessage();

  message = messageApi;

  return (
    <Fragment>
      {contextHolder}

      {children}
    </Fragment>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { message };
