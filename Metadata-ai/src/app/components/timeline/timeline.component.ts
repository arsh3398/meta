import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {
  cloudSection=[
    {'cloudImg':'assets/aws.png','cloudDesc':'Fortify Your Future with AWS Security: Unleash Trust in the Cloud','cloudtag':'Strengthen AWS Cloud Trust'},
    {'cloudImg':'assets/azure.png','cloudDesc':'Elevate Confidence in the Cloud: Empowering Security with Azure','cloudtag':'Boosting Azure Security Confidence'},
    {'cloudImg':'assets/gc.png','cloudDesc':'Guardian of Cloud Confidence: Securing Excellence with GCP','cloudtag':'Cloud Confidence: GCP Security'},
  ]
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Select cards within this component's element
    const lazyCards = this.elementRef.nativeElement.querySelectorAll('.lazy-load-image');

    // Define an Intersection Observer callback function
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if( entry.isIntersecting)
        {entry.target.classList.add('loaded');}
      });
    };

    // Create an Intersection Observer instance
    const observerOptions: IntersectionObserverInit = {
      threshold: 1, // Define your desired threshold here
    };
    const observer: IntersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each card within this component
    lazyCards.forEach((card: Element) => {
      observer.observe(card);
    });
  }
}

