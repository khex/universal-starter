  constructor(private model: ModelService,
              private route: ActivatedRoute,
              private element: ElementRef,
              private renderer: Renderer) {
    //  Attributes are defined by HTML.
    //  Properties are defined by DOM.
    //  https://netbasal.com/e43ef673b26c
    let jsonTag = renderer.createElement(element.nativeElement, "script");
    renderer.setElementAttribute(jsonTag, "type", "application/ld+json");
    renderer.setText(jsonTag, JSON.stringify(this.JsonLD));
  }