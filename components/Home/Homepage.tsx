import React from "react";
import Image from "next/image";
import styles from "./homepage.module.scss";
import cx from "classnames";
import createButton from "../../public/create-button.png";
import paymentRequest from "../../public/payment-request.png";

interface HomepageProps {
  onNavigateToPaymentRequest: () => void;
  onNavigateToGenerateButton: () => void;
}

export default function Homepage({
  onNavigateToPaymentRequest,
  onNavigateToGenerateButton,
}: HomepageProps) {
  return (
    <div
      className={cx(styles.homepageContainer, "flex flex-col items-center p-8")}
    >
      <h1 className="text-4xl mb-1 text-center">Receive crypto,</h1>
      <h1 className="text-4xl mb-8 text-center">easily.</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={cx(
            styles.optionCard,
            "flex flex-col items-center p-6 border rounded-lg cursor-pointer"
          )}
        >
          <Image
            src={paymentRequest}
            alt="Payment Request"
            width={90}
            height={90}
            className="mb-2"
          />
          <div className="text-center">
            <p className="text-sm text-white-600 mb-4">
              A quick and easy payment request.
            </p>
          </div>
          <button
            type="button"
            className={cx(
              styles.fixedButton,
              "bg-blue-500 text-white px-4 py-2 rounded-lg"
            )}
            onClick={onNavigateToPaymentRequest}
          >
            Create payment link
          </button>
        </div>

        <div
          className={cx(
            styles.optionCard,
            "flex flex-col items-center p-6 border rounded-lg cursor-pointer"
          )}
        >
          <Image
            src={createButton}
            alt="Customize Button"
            width={105}
            height={105}
            className="mb-2"
          />
          <div className="text-center">
            <p className="text-sm text-white-600 mb-4">
              Fundraise right from your website.
            </p>
          </div>
          <button
            type="button"
            className={cx(
              styles.fixedButton,
              "bg-blue-500 text-white px-4 py-2 rounded-lg"
            )}
            onClick={onNavigateToGenerateButton}
          >
            Coming soon...
          </button>
        </div>
      </div>
    </div>
  );
}
