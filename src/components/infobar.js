

function InfoBar() {
  return (
    <div className="art-info-bar">

    {/* <!-- menu bar frame --> */}
    <div className="art-info-bar-frame">

      {/* <!-- info bar header --> */}
      <div className="art-info-bar-header">
        {/* <!-- info bar button --> */}
        <a className="art-info-bar-btn" href="gt">
          {/* <!-- icon --> */}
          <i className="fas fa-ellipsis-v"></i>
        </a>
        {/* <!-- info bar button end --> */}
      </div>
      {/* <!-- info bar header end --> */}

      {/* <!-- info bar header --> */}
      <div className="art-header">
        {/* <!-- avatar --> */}
        <div className="art-avatar">
          <a data-fancybox="avatar" href="img/face-1.jfif" className="art-avatar-curtain">
            <img src="img/face-1.jfif" alt="avatar"/>
            <i className="fas fa-expand"></i>
          </a>

        </div>
        {/* <!-- avatar end --> */}
        {/* <!-- name --> */}
        <h5 className="art-name mb-10"><a href="#.">Siwar Hassen</a></h5>
        {/* <!-- post --> */}
        <div className="art-sm-text">FullStack Engineer </div>
      </div>
      {/* <!-- info bar header end --> */}

      {/* <!-- scroll frame --> */}
      <div id="scrollbar2" className="art-scroll-frame">

        {/* <!-- info bar about --> */}
        <div className="art-table p-15-15">
          {/* <!-- about text --> */}
          <ul>
            {/* <!-- country --> */}
            <li>
              <h6>Residence:</h6><span>Tunisia/France</span>
            </li>
            {/* <!-- city --> */}
            {/* <!-- age --> */}
            <li>
              <h6>Age:</h6><span>24</span>
            </li>
            <li>
              <h6>Email:</h6><span>siouar.hassen@gmail.com</span>
            </li>
          </ul>
        </div>
        {/* <!-- info bar about end --> */}
        <div className="art-ls-divider"></div>
        {/* <!-- divider --> */}
                {/* <!-- knowledge list --> */}
                <div className="art-knowledge-list p-15-0">
I am a software engineer.Specialising
 in Full-stack development.  I’m very passionate about coding ,traveling, photography,
  Graphic Design and video editing.
        
        <br/><br/>
        </div>
        {/* <!-- knowledge list end --> */}

        {/* <!-- divider --> */}
        <div className="art-ls-divider"></div>

        {/* <!-- hard skills --> */}
        <div className="art-hard-skills p-30-15">

          {/* <!-- skill --> */}
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              {/* <!-- title --> */}
              <h6>Arabic</h6>
            </div>
            {/* <!-- progressbar frame --> */}
            <div className="art-line-progress">
              {/* <!-- progressbar --> */}
              <div id="lineprog1"></div>
            </div>
            {/* <!-- progressbar frame end --> */}
          </div>
          {/* <!-- skill end --> */}

          {/* <!-- skill --> */}
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              {/* <!-- title --> */}
              <h6>French</h6>
            </div>
            {/* <!-- progressbar frame --> */}
            <div className="art-line-progress">
              {/* <!-- progressbar --> */}
              <div id="lineprog2"></div>
            </div>
            {/* <!-- progressbar frame end --> */}
          </div>
          {/* <!-- skill end --> */}

          {/* <!-- skill --> */}
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              {/* <!-- title --> */}
              <h6>English</h6>
            </div>
            {/* <!-- progressbar frame --> */}
            <div className="art-line-progress">
              {/* <!-- progressbar --> */}
              <div id="lineprog3"></div>
            </div>
            {/* <!-- progressbar frame end --> */}
          </div>
          {/* <!-- skill end --> */}

          {/* <!-- skill --> */}
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              {/* <!-- title --> */}
              <h6>German</h6>
            </div>
            {/* <!-- progressbar frame --> */}
            <div className="art-line-progress">
              {/* <!-- progressbar --> */}
              <div id="lineprog4"></div>
            </div>
            {/* <!-- progressbar frame end --> */}
          </div>
          {/* <!-- skill end --> */}


        </div>
        {/* <!-- language skills end --> */}

        {/* <!-- divider --> */}
        <div className="art-ls-divider"></div>



        {/* <!-- divider --> */}

      </div>
      {/* <!-- scroll frame end --> */}

      {/* <!-- sidebar social --> */}
      <div className="art-ls-social">
        {/* <!-- social link --> */}
 
        {/* <!-- social link --> */}
        <a href="https://www.linkedin.com/in/siwarhassen/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        {/* <!-- social link --> */}
        <a href="https://github.com/SHA-Cementys" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        {/* <!-- social link --> */}
        <a href="https://github.com/siwarhassen" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        {/* <!-- social link --> */}
        {/* <a href="public/img/Siwarhassen-CV.pdf" target="_blank"><i className="fa fa-file-pdf" ></i></a> */}
      </div>
      {/* <!-- sidebar social end --> */}

    </div>
    {/* <!-- menu bar frame end --> */}

  </div>
  );
}

export default InfoBar;
