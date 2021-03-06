import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Currency } from '../hoc';
import './styles/Account.scss';
import Button from '../atoms/Button';

export interface AccountData {
  accountID?: number;
  accountType?: string;
  state?: string;
  availableValue?: number;
}

interface Props {
  data: AccountData;
}

const Account: FunctionComponent<Props> = (props: Props) => {
  const { data } = props;
  const value = data.availableValue || 0;
  const history = useHistory();

  function handleDetailsClick() {
    history.push(`/movimiento/${data.accountID}`);
  }

  return (
    <div className="account">
      <h2 className="account_description">
        {`${data.accountType}: ****`}
        {data.accountID}
      </h2>
      <p className="account_value">
        {'Su saldo: '}
        <Currency type="COP">{value}</Currency>
      </p>
      <p className={`account_state ${data.state}`}>{data.state === 'active' ? 'Activo' : 'No Activo'}</p>
      <Button
        type="bottom-form"
        className="account_button"
        onClick={handleDetailsClick}
      >
        Ver Detalles
      </Button>
    </div>
  );
};

export default Account;
