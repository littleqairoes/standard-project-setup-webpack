// Master container
// <CLGrid columns={1}>
// </CLGrid>
<div>
 <!--Button-->
  <CLGrid columns={1} id='+'>
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
        <CLCardTitle title="Card Media" />
        <CLCardMedia src='http://goo.gl/Ao0H0n'/>
      </CLCardThumbnailBody>
    </CLCard>
  </CLGrid>

  <!--Card Text-->
  <CLGrid columns={1}>
    <CLCard>
      <CLCardThumbnailBody>
        <CLCardTitle title="Card Text" />
        <CLCardText>
          <p>
            Card text goes here with the <\/p> tag
          </p>
        </CLCardText>
      </CLCardThumbnailBody>
    </CLCard>
  </CLGrid>

  <!--Card Text-->
  <CLGrid columns={1}>
    <CLCard>
      <CLCardThumbnailBody>
        <CLCardTitle title="CARD TITLE HERE!" />
      </CLCardThumbnailBody>
    </CLCard>
  </CLGrid>

  <!--Logo-->
  <CLGrid columns={1}>
    <CLLogo />
    <CLLogo image='http://goo.gl/Ao0H0n'/>
    <CLLogo label='CUSTOM LABEL'/>
  </CLGrid>

  <!--MarkdownRenderer-->
  <CLGrid columns={1}>
    <CLMarkdownRenderer />
  </CLGrid>

  <!--Nav Link-->
  <CLGrid columns={1}>
    <CLNavLink link={
      url: 'https://google.com',
      name: 'Google'
    }/>
  </CLGrid>

  <!--Progress Bar-->
  <CLGrid columns={1}>
    <CLProgressBar />
  </CLGrid>

  <!--Slider-->
  <CLGrid columns={1}>
    <CLSlider />
  </CLGrid>

</div>