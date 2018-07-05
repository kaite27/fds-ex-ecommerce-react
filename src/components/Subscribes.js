import React from 'react';

import SubscribesForm from './SubscribesForm';
import LoadingBox from '../components/LoadingBox';
import {
  SubscribesProvider,
  SubscribesConsumer,
} from '../contexts/SubscribesContext';

export default function Subscribes() {
  return (
    <div className="subscribes" id="subscribes">
      <div className="rows">
        <h2>Subscribe Our Weekly News</h2>
        <p>
          Subscribe to our newsletter! Lorem Ipsum is simply dummy text Lorem{' '}
          <br />
          Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem
          Ipsum is simply dummy text Lorem Ipsum is simply dummy text.
        </p>
      </div>
      <div className="rows">
        <div className="subscribes-form field">
          <SubscribesProvider>
            <SubscribesConsumer>
              {({ loading, sendEmail }) =>
                loading ? (
                  <div>Sending...</div> // required css!!
                ) : (
                  <SubscribesForm
                    onSubscribe={async email => {
                      await sendEmail(email);
                    }}
                  />
                )
              }
            </SubscribesConsumer>
          </SubscribesProvider>
        </div>
      </div>
    </div>
  );
}
