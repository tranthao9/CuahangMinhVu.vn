
        jQuery(document).ready(function ($) {
            var _SlideshowTransitions = [
			
            ];
            var options = {$AutoPlay: true,$AutoPlaySteps: 1,$AutoPlayInterval: 5000,$PauseOnHover: 1,
                $ArrowKeyNavigation: true,  $SlideEasing: $JssorEasing$.$EaseOutQuint, $SlideDuration: 2000,                $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $DisplayPieces: 1,$ParkingPosition: 0, $UISearchMode: 1,
				$PlayOrientation: 1,$DragOrientation: 1,
				$SlideshowOptions: {$Class: $JssorSlideshowRunner$,$Transitions: _SlideshowTransitions,$TransitionsOrder: 1,$ShowLink: true},
				$ArrowNavigatorOptions: {$Class: $JssorArrowNavigator$,$ChanceToShow: 1,$AutoCenter: 2,$Steps: 1},
				$BulletNavigatorOptions: { $Class: $JssorBulletNavigator$,$ChanceToShow: 2,$AutoCenter: 1,$Steps: 1,
				$Lanes: 1,  $SpacingX: 4,$SpacingY: 4,$Orientation: 1 }
            };

            var jssor_slider1 = new $JssorSlider$("Slideshow_2", options);
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$ScaleWidth(Math.min(parentWidth, 760));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            //$(window).bind("orientationchange", ScaleSlider);
        });
    