function Interests() {
    return (

        <div className="art-content">

          {/* <!-- curtain --> */}
          <div className="art-curtain"></div>

          {/* <!-- top background --> */}
          <div className="art-top-bg" style={{backgroundImage: "url(img/bg.jpg)"}}>
            {/* <!-- overlay --> */}
            <div className="art-top-bg-overlay"></div>
            {/* <!-- overlay end --> */}
          </div>
          {/* <!-- top background end --> */}


          {/* <!-- swup container --> */}
          <div className="transition-fade" id="swup">

            {/* <!-- scroll frame --> */}
            <div id="scrollbar" className="art-scroll-frame">


            {/*       <!-- container --> */}
              <div className="container-fluid">

                {/* <!-- row --> */}
                <div className="row p-30-0">

                  {/*   <!-- col --> */}
                  <div className="col-lg-12">

                    {/* <!-- filter --> */}
                    <div className="art-filter mb-30">
                      {/* <!-- filter link --> */}
                      <a href="#a" data-filter="*" className="art-link art-current">All Categories</a>
                      {/* <!-- filter link --> */}
                      <a href="#a" data-filter=".graphics" className="art-link">Graphics</a>
                      {/* <!-- filter link --> */}
                      <a href="#a" data-filter=".photography" className="art-link">Photography</a>
                      {/* <!-- filter link --> */}
                      <a href="#a" data-filter=".travel" className="art-link">Travel</a>
                    </div>
                    {/* <!-- filter end --> */}

                  </div>
                 {/*        <!-- col end --> */}

                  <div className="art-grid art-grid-3-col art-gallery">

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item travel">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/travel/autriche.PNG" className="art-a art-portfolio-item-frame art-horizontal">
                         {/* <!-- img -->  */}
                        <img src="img/interests/travel/autriche.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        <h5 className="mb-15">Vienne</h5>
                        <div className="mb-15">Vienna is a beautiful historical city. It is clean and organized . For me it is a fantastic place to visit, especially for classical music lovers.</div>
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item graphics">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/graphic/logo.PNG" className="art-a art-portfolio-item-frame art-vertical">
                         {/* <!-- img -->  */}
                        <img src="img/interests/graphic/logo.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                        <div className="mb-15">These are among the logos I have made.</div>

                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item photography">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/photography/canon.PNG" className="art-a art-portfolio-item-frame art-square">
                         {/* <!-- img -->  */}
                        <img src="img/interests/photography/canon.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                        <div className="mb-15">It is my source of happiness.</div>

                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*  <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item photography">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/photography/nature.PNG" className="art-a art-portfolio-item-frame art-vertical">
                         {/* <!-- img -->  */}
                        <img src="img/interests/photography/nature.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5>
                        <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*  <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item travel">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/travel/pise.PNG" className="art-a art-portfolio-item-frame art-square">
                         {/* <!-- img -->  */}
                        <img src="img/interests/travel/pise.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        <h5 className="mb-15">Pisa</h5>
                        <div className="mb-15">Other than the tower, there’s not much to see.</div>

                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item graphics">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/graphic/affic.PNG" className="art-a art-portfolio-item-frame art-vertical">
                         {/* <!-- img -->  */}
                        <img src="img/interests/graphic/affic.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                        <div className="mb-15">Among the badges I created</div>

                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item photography">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/photography/mentos.jpg" className="art-a art-portfolio-item-frame art-square">
                         {/* <!-- img -->  */}
                        <img src="img/interests/photography/mentos.jpg" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5>
                        <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
     */}
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item photography">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/photography/chaj.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                         {/* <!-- img -->  */}
                        <img src="img/interests/photography/chaj.jpg" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}

                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item graphics">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/graphic/formaland.PNG" className="art-a art-portfolio-item-frame art-horizontal">
                         {/* <!-- img -->  */}
                        <img src="img/interests/graphic/formaland.PNG" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                        <div className="mb-15">I made this poster during my training in Formaland (learn how to create posters,logos,business cards..) .</div>
                        
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item photography">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/photography/kes.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                         {/* <!-- img -->  */}
                        <img src="img/interests/photography/kes.jpg" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                   {/* <!-- grid item -->  */}
                    <div className="art-grid-item photography">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/photography/cat.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                         {/* <!-- img -->  */}
                        <img src="img/interests/photography/cat.jpg" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                                   {/* <!-- grid item -->  */}
                                   <div className="art-grid-item travel">
                       {/* <!-- grid item frame -->  */}
                      <a data-fancybox="gallery" href="img/interests/travel/me.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                         {/* <!-- img -->  */}
                        <img src="img/interests/travel/me.jpg" alt="item"/>
                         {/* <!-- zoom icon -->  */}
                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                      </a>
                      {/*  <!-- grid item frame end -->  */}
                       {/* <!-- description -->  */}
                      <div className="art-item-description">
                         {/* <!-- title -->  */}
                        {/* <h5 className="mb-15">Project title</h5> */}
                      </div>
                      {/*   <!-- description end -->  */}

                    </div>
                {/*        <!-- grid item end -->  */}

                  </div>

                </div>
                 {/*       <!-- row end -->  */}

              </div>
             {/*         <!-- container end --> */}

              {/*       <!-- container --> */}
              <div className="container-fluid">

              {/*      <!-- row --> */}
     
                 {/*       <!-- row end -->  */}

              </div>
             {/*         <!-- container end --> */}

              {/*       <!-- container --> */}
              <div className="container-fluid">

              </div>
             {/*         <!-- container end --> */}

            </div>
         {/*            <!-- scroll frame end -->*/}

          </div> {/*
          <!-- swup container end -->*/}

        </div>
);
}
                                                                                
 export default Interests;