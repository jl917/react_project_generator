module.exports = `.wrap {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  .page {
    flex: 1;
    width: calc(100vw - 250px);
    position: relative;

    .contents {
      margin: 0 30px;
      padding: 50px 0;

      .page_contents {
        background: #fff;
        padding-bottom: 30px;
      }
    }
  }
}`;
