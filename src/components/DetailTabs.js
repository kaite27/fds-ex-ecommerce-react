import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import DetailTabCommentList from './DetailTabCommentList';
import DetailTabPolicy from './DetailTabPolicy';

export default function DetailTab() {
  return (
    <React.Fragment>
      <div className="rows">
        <div className="comment-box">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Detail">
              <div className="product-detail-img">
                <img
                  src="http://image.ticketmonster.co.kr/deals/2018/05/30/1145577766/1145577766_product_main_0a2e0_1527660426production.jpg"
                  alt="Main Product"
                />
              </div>
            </Tab>
            <Tab eventKey={2} title="Reviews (0)">
              <DetailTabCommentList />
            </Tab>
            <Tab eventKey={3} title="Return Policy">
              <DetailTabPolicy />
            </Tab>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
}
