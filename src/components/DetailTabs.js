import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import DetailTabCommentList from './DetailTabCommentList';
import DetailTabPolicy from './DetailTabPolicy';

export default function DetailTab({ comments = [] }) {
  return (
    <React.Fragment>
      <div className="rows">
        <div className="comment-box">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Detail">
              <div className="product-detail-img">
                <img
                  src="http://image.ticketmonster.co.kr/deals/2018/07/05/1285580786/1285580786_product_main_5f37d_1530771249production.jpg"
                  alt="Main Product"
                />
              </div>
            </Tab>
            <Tab eventKey={2} title={`Reviews(${comments.length})`}>
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
