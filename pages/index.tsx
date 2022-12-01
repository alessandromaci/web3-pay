import * as React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Wallet from "../components/Wallet";
import WalletDisconnect from "../components/WalletDisconnected";
import Request from "../components/Request/Request";
import Footer from "../components/Footer";

import Alert from "@mui/material/Alert";
import styles from "./index.module.scss";
import cx from "classnames";

import { useAccount, useConnect } from "wagmi";

export default function Home() {
  const { error } = useConnect();
  const [badRequest, setBadRequest] = React.useState<boolean>(false);
  const [amountZeroRequest, setAmountZeroRequest] =
    React.useState<boolean>(false);
  const [noTokenRequest, setNoTokenRequest] = React.useState<boolean>(false);

  const { isConnected } = useAccount();
  const [connected, setConnected] = React.useState<boolean>(false);
  React.useEffect(() => setConnected(isConnected), [isConnected]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-between p-7 z-10">
        <div>
          <Image alt="web3-pay" src={logo} width={280} height={120} />
          <p className="font-base text-xs text-white mt-2 ml-1 opacity-60">
            Web 3 payments made easy
          </p>
        </div>

        <div className="hidden md:block">
          <Wallet />
        </div>
      </div>

      <section
        className={cx(
          styles.baseContainer,
          "h-screen w-full flex justify-center items-center"
        )}>
        <div className="fixed top-8 bg-white rounded">
          {error && (
            <Alert variant="filled" severity="error">
              {error.message}
            </Alert>
          )}

          {badRequest && (
            <Alert variant="filled" severity="error">
              {`Error: The payment creation failed`}
            </Alert>
          )}

          {amountZeroRequest && (
            <Alert variant="filled" severity="error">
              {`Error: You can't create a payment request with value 0`}
            </Alert>
          )}

          {noTokenRequest && (
            <Alert variant="filled" severity="error">
              {`Error: You can't create a payment request without selecting a token`}
            </Alert>
          )}
        </div>

        <div
          className={cx(
            styles.containerBase,
            "h-screen w-full absolute top-0 z-0 opacity-50"
          )}></div>

        {
          <Request
            setBadRequest={setBadRequest}
            setAmountZeroRequest={setAmountZeroRequest}
            setNoTokenRequest={setNoTokenRequest}
          />
        }
      </section>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  );
}
