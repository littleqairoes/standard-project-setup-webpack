// Master container
// <CLGrid columns={1}>
// </CLGrid>
<div>
 <!--Button-->
  <CLGrid columns={1}>
    <h2 id='cl-button'>Button</h2>
    <CLButton />
    <CLButton
      isRaised={true}
      label='RAISED BUTTON'
    />
    <CLButton

    />
  </CLGrid>
  <!--Card Media-->
  <CLGrid columns={1}>
    <CLCard>
      <CLCardThumbnailBody>
        <CLCardTitle title="Card Media" subTitle="This is something"/>
        <CLCardMedia />
      </CLCardThumbnailBody>
    </CLCard>
  </CLGrid>




</div>