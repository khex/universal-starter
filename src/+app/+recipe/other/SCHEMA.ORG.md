# Thing = 
  [x] additionalType:   <URL> <link itemprop="additionalType" href="http://schema.org/Product"/>
 g[x] description:      <Text>
 g[x] image:            <ImageObject> || <URL> <img itemprop="image" src="bread.jpg"/>
  [x] url:              <URL>
 g[x] name:             <Text>
  [ ] alternateName:    <Text> 
  [ ] mainEntityOfPage: <CreativeWork> || <URL> 
  [ ] potentialAction:  <Action> 
  [ ] sameAs:           <URL>

# Recipe =  
  [x] recipeCategory:     <Text>
  [x] prepTime:           <Duration> 
  [x] cookTime:           <Duration> 
  [x] totalTime:          <Duration> 
  [x] cookingMethod:      <Text> multiple
  [x] recipeCuisine:      <Text> single
  [x] recipeYield:        <Text>
  [x] suitableForDiet:    <RestrictedDiet> ex.: LowFatDiet"
 -[x] purpose:            <Text> пикник, 8 марта, день ВДВ
  [ ] totalWeight:        <Text> yandex, calculate by ingredients
 -[ ] temperature:        <Text> pizza: hot & room tenperature. smth only cold
 -[ ] complexity:         <Text> hard, easy, medium
 -[ ] cost:               <Text> $, $$, $$$
  [ ] recipeIngredient:   <Text>
  [ ] recipeInstructions: <Text> || <ItemList>
  [ ] nutrition:          <NutritionInformation>
   g[ ] calories              <Energy>  The number of calories.: 240 ккал
    [ ] carbohydrateContent   <Mass>    The number of grams of carbohydrates.
    [ ] cholesterolContent    <Mass>    The number of milligrams of cholesterol.
    [ ] fatContent            <Mass>    The number of grams of fat.: 7 кг
    [ ] fiberContent          <Mass>    The number of grams of fiber.
    [ ] proteinContent        <Mass>    The number of grams of protein.
    [ ] saturatedFatContent   <Mass>    The number of grams of saturated fat.
    [ ] servingSize           <Text>    The serving size, in terms of the number of volume or mass.
    [ ] sodiumContent         <Mass>    The number of milligrams of sodium.
    [ ] sugarContent          <Mass>    The number of grams of sugar.
    [ ] transFatContent       <Mass>    The number of grams of trans fat.
    [ ] unsaturatedFatContent <Mass>    The number of grams of unsaturated fat.

# CreativeWork = 
 g[ ] aggregateRating:      <AggregateRating>           The overall rating, based on a collection of reviews or ratings, of the item.
 g[ ] author:               <Organization> || <Person>  The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 g[ ] datePublished:        <Date> Date of first broadcast/publication.
 g[ ] review:               <Review> A review of the item. Supersedes reviews.
  [ ] comment:              <Comment>                   Comments, typically from users.
  [ ] commentCount:         <Integer>                   The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
  [ ] creator:              <Organization> or <Person>  The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
  [ ] dateCreated:          <Date> or <DateTime>        The date on which the CreativeWork was created or the item was added to a DataFeed.
  [ ] dateModified:         <Date> or <DateTime>        The date on which the CreativeWork was most recently modified
  [ ] headline:             <Text>                      Headline of the article.
  [ ] inLanguage:           <Language> || <Text>        The language of the content or performance or used in an action. Please use one of the language codes from the IETF BCP 47 standard. See also availableLanguage. Supersedes language.
  [ ] keywords:             <Text>                      Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
  [ ] text:                 <Text>                      The textual content of this CreativeWork.
  [ ] thumbnailUrl:         <URL>                       A thumbnail image relevant to the Thing.
  [ ] video:                <VideoObject>               An embedded video object.

  [ ] about:                <Thing> The subject matter of the content.
  [ ] accessibilityAPI:     <Text> Indicates that the resource is compatible with the referenced accessibility API (WebSchemas wiki lists possible values).
  [ ] accessibilityControl: <Text> Identifies input methods that are sufficient to fully control the described resource (WebSchemas wiki lists possible values).
  [ ] accessibilityFeature: <Text> Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (WebSchemas wiki lists possible values).
  [ ] accessibilityHazard:  <Text> A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 (WebSchemas wiki lists possible values).
  [ ] accountablePerson:    <Person> Specifies the Person that is legally accountable for the CreativeWork.
  [ ] alternativeHeadline:  <Text> A secondary title of the CreativeWork.
  [ ] associatedMedia:      <MediaObject> A media object that encodes this CreativeWork. This property is a synonym for encoding.
  [ ] audience:             <Audience> An intended audience, i.e. a group for whom something was created. Supersedes serviceAudience.
  [ ] audio:                <AudioObject> An embedded audio object.
  [ ] award:                <Text> An award won by or for this item. Supersedes awards.
  [ ] character:            <Person> Fictional person connected with a creative work.
  [ ] citation:             <CreativeWork> || <Text>  A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
  [ ] contentLocation:      <Place> The location depicted or described in the content. For example, the location in a photograph or painting.
  [ ] contentRating:        <Text> Official rating of a piece of content—for example,'MPAA PG-13'.
  [ ] contributor:          <Organization> || <Person> A secondary contributor to the CreativeWork or Event.
  [ ] copyrightHolder:      <Organization> || <Person> The party holding the legal copyright to the CreativeWork.
  [ ] copyrightYear:        <Number> The year during which the claimed copyright for the CreativeWork was first asserted.

  [ ] discussionUrl:        <URL> A link to the page containing the comments of the CreativeWork.
  [ ] editor:               <Person> Specifies the Person who edited the CreativeWork.
  [ ] educationalAlignment: <AlignmentObject> An alignment to an established educational framework.
  [ ] educationalUse:       <Text> The purpose of a work in the context of education; for example, 'assignment', 'group work'.
  [ ] encoding:             <MediaObject>     A media object that encodes this CreativeWork. This property is a synonym for associatedMedia. Supersedes encodings.
  [ ] exampleOfWork:        <CreativeWork> A creative work that this work is an example/instance/realization/derivation of.
  [ ] fileFormat:           <Text> or <URL>     Media type, typically MIME format (see IANA site).
  [ ] funder:               <Organization> || <Person> A person or organization that supports (sponsors) something through some kind of financial contribution.
  [ ] genre:                <Text> or <URL> Genre of the creative work or group.
  [ ] hasPart:              <CreativeWork> Indicates a CreativeWork that is (in some sense) a part of this CreativeWork.
  [ ] interactionStatistic: <InteractionCounter> The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. Supersedes interactionCount.
  [ ] interactivityType:    <Text> The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
  [ ] isAccessibleForFree:  <Boolean> A flag to signal that the publication is accessible for free. Supersedes free.
  [ ] isBasedOn:            <CreativeWork> || <Product> || <URL> A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html. Supersedes isBasedOnUrl.
  [ ] isFamilyFriendly:     <Boolean> Indicates whether this content is family friendly.
  [ ] isPartOf:             <CreativeWork> Indicates a CreativeWork that this CreativeWork is (in some sense) part of.
  [ ] learningResourceType: <Text> The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
  [ ] license:              <CreativeWork> || <URL> A license document that applies to this content, typically indicated by URL.
  [ ] locationCreated:      <Place> The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
  [ ] mainEntity:           <Thing> Indicates the primary entity described in some page or other CreativeWork.
  [ ] mentions:             <Thing> Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
  [ ] offers:               <Offer> An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.
  [ ] position:             <Integer> or <Text> The position of an item in a series or sequence of items.
  [ ] producer:             <Organization> || <Person>  The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
  [ ] provider:             <Organization> || <Person>  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. Supersedes carrier.
  [ ] publication:          <PublicationEvent> A publication event associated with the item.
  [ ] publisher:            <Organization> || <Person>  The publisher of the creative work.
  [ ] publishingPrinciples: <URL> Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.
  [ ] recordedAt:           <Event>   The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
  [ ] releasedEvent:        <PublicationEvent> The place and time the release was issued, expressed as a PublicationEvent.

  [ ] schemaVersion:        <Text> || <URL> Indicates (by URL or string) a particular version of a schema used in some CreativeWork.
  [ ] sourceOrganization:   <Organization> The Organization on whose behalf the creator was working.
  [ ] spatialCoverage:      <Place> The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content.
  [ ] sponsor:              <Organization> || <Person>  A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
  [ ] temporalCoverage:     <DateTime> || <Text> || <URL> The temporalCoverage of a CreativeWork indicates the period that the content applies to
  [ ] timeRequired:         <Duration> Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.
  [ ] translator:           <Organization> || <Person>  Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
  [ ] typicalAgeRange:      <Text> The typical expected age range, e.g. '7-9', '11-'.
  [ ] version:              <Number> || <Text> The version of the CreativeWork embodied by a specified resource.
  [ ] workExample:          <CreativeWork> Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
