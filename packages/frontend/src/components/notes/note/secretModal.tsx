import { DocumentAddIcon, EyeIcon, QrcodeIcon } from '@heroicons/react/outline';
import { LinkIcon, WifiIcon } from '@heroicons/react/solid';
import {
  Avatar,
  Button,
  Container,
  Input,
  Modal,
  Spacer,
  Text,
} from '@nextui-org/react';
import React, { useState } from 'react';

interface SecretModalProps {
  visible: boolean;
  setVisible(value: boolean): void;
  loading: boolean;
  data: string;
}

const SecretModal: React.FC<SecretModalProps> = ({
  visible,
  setVisible,
  loading,
  data,
}) => {
  const [passwordShown, setPasswordShown] = useState(true);

  const passwordHandler = () => {
    setPasswordShown(!passwordShown);
  };

  const closeHandler = () => {
    setVisible(false);
    setPasswordShown(true);
  };

  const editButton = () => {
    return (
      <Avatar
        squared
        icon={<DocumentAddIcon className="w-full" />}
        css={{ p: 10 }}
        as="button"
        pointer
      />
    );
  };

  return (
    <div>
      <Modal
        closeButton
        scroll
        open={visible}
        onClose={closeHandler}
        aria-labelledby="modal-title"
      >
        <Spacer y={1} />
        <Modal.Header>
          <Container
            display="flex"
            direction="row"
            alignItems="center"
            css={{ p: 0 }}
          >
            <Avatar
              icon={<WifiIcon className="h-5 w-5 text-teal-50" />}
              color="primary"
            />
            <Text b size={18} span css={{ ml: 8 }}>
              Secret
            </Text>
            {loading ? <></> : editButton()}
          </Container>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <>Loading...</>
          ) : (
            <Container
              direction="row"
              display="flex"
              alignItems="flex-end"
              justify="space-between"
              css={{ p: 0 }}
            >
              {passwordShown ? (
                <Input
                  readOnly
                  width="100%"
                  type={passwordShown ? 'password' : 'text'}
                  initialValue={data}
                />
              ) : (
                <Text id="modal-description">{data}</Text>
              )}
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <></>
          ) : (
            <Container
              direction="row"
              display="flex"
              alignItems="flex-end"
              justify="space-between"
              css={{ p: 0 }}
            >
              <Button
                auto
                rounded
                onClick={passwordHandler}
                icon={<EyeIcon className="h-6 w-6 text-teal-50" />}
              >
                Show Secret
              </Button>
              <Button auto rounded onClick={closeHandler}>
                Done
              </Button>
            </Container>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SecretModal;
