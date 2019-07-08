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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac suscipit nunc, vitae ullamcorper ex. Pellentesque pulvinar
                  leo vitae placerat tincidunt. Donec in eleifend diam. Donec
                  vehicula eleifend ultrices. Fusce aliquet scelerisque tempus.
                  Fusce ut mi quis magna ultricies convallis ac pharetra lectus.
                  Sed ut augue ut urna vulputate vestibulum. Donec posuere
                  tellus eu neque imperdiet, vitae pretium diam ultrices. Etiam
                  et venenatis tellus. Fusce sed egestas dui. <br />
                  <br /> In tempus egestas volutpat. Mauris velit est, placerat
                  sit amet porta et, dignissim in velit. Pellentesque tortor
                  odio, rutrum ut odio sed, accumsan sodales augue. Nullam
                  ullamcorper ex sit amet sodales molestie. Aenean id eros et
                  ligula blandit tincidunt. Nunc aliquet molestie sapien, ac
                  consequat purus blandit vehicula. Donec quis tellus quis dui
                  vulputate consequat. Suspendisse condimentum mattis massa, sit
                  amet iaculis mauris venenatis suscipit.<br /> <br /> Aenean
                  vel maximus augue, dignissim porttitor diam. Nam condimentum
                  sodales vehicula. In maximus rhoncus nisl. Ut eu facilisis
                  neque, quis facilisis nibh. Integer fringilla, lorem sed
                  aliquet mattis, dolor orci pharetra lorem, eget placerat lorem
                  dui quis tortor. Fusce et mi diam. Aliquam interdum lorem
                  tristique nulla egestas, efficitur varius diam viverra.
                </p>
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
