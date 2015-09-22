var Carousel = (function () {
    function Carousel(element, controller) {
        this.element = element;
        this.controller = controller;
        this.items = this.element.children;
        this.itemCount = this.items.length;
        this.targetItem = 0;
        this.time = 6000;
        this.initializeDOM();
        this.startUpdateLoop();
    }
    Carousel.prototype.startUpdateLoop = function () {
        this.loop = setInterval(this.updateLoop, this.time, this);
    };
    Carousel.prototype.updateLoop = function (carousel) {
        carousel.targetItem++;
        carousel.setItemsLocations();
        carousel.setTextInvisibleWhenNotTargeted();
        carousel.fillTargetedControl();
    };
    Carousel.prototype.initializeDOM = function () {
        this.addCarouselItemClass();
        this.setItemsLocations();
        this.makeControls();
        this.fillTargetedControl();
    };
    Carousel.prototype.addCarouselItemClass = function () {
        for (var i = 0; i < this.itemCount; i++) {
            Utils.addClass(this.items[i], "carousel-item");
        }
    };
    Carousel.prototype.setItemsLocations = function () {
        for (var i = 0; i < this.itemCount; i++) {
            this.setItemLocation(this.items[i], i, this.itemCount, this.targetItem);
        }
    };
    Carousel.prototype.setItemLocation = function (item, index, length, target) {
        var offset = this.getCalculatedItemLocation(index, length, target) * this.element.clientWidth;
        var zIndex = length + this.getCalculatedItemLocation(index, length, target);
        item.setAttribute("style", "left: " + offset.toString() + "px; z-index: " + zIndex + ";");
    };
    Carousel.prototype.getCalculatedItemLocation = function (index, length, target) {
        var value = (target - index) % length;
        var mid = Math.floor(length / 2);
        return (value <= mid && value >= -mid) ?
            value :
            ((value > mid) ?
                (value - length) :
                (value + length));
    };
    Carousel.prototype.setTextInvisibleWhenNotTargeted = function () {
        for (var i = 0; i < this.itemCount; i++) {
            var item = this.items[i];
            if (i !== this.targetItem % this.itemCount) {
                Utils.addClass(item, "carousel-text-hidden");
            }
            else {
                Utils.removeClass(item, "carousel-text-hidden");
            }
        }
    };
    Carousel.prototype.makeControls = function () {
        for (var i = 0; i < this.itemCount; i++) {
            var control = document.createElement("span");
            Utils.addClass(control, "carousel-control");
            this.controller.appendChild(control);
        }
    };
    Carousel.prototype.fillTargetedControl = function () {
        for (var i = 0; i < this.itemCount; i++) {
            var control = this.controller.children[i];
            if (i !== this.targetItem % this.itemCount) {
                Utils.removeClass(control, "carousel-control--active");
            }
            else {
                Utils.addClass(control, "carousel-control--active");
            }
        }
    };
    return Carousel;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLnRzIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiQ2Fyb3VzZWwuY29uc3RydWN0b3IiLCJDYXJvdXNlbC5zdGFydFVwZGF0ZUxvb3AiLCJDYXJvdXNlbC51cGRhdGVMb29wIiwiQ2Fyb3VzZWwuaW5pdGlhbGl6ZURPTSIsIkNhcm91c2VsLmFkZENhcm91c2VsSXRlbUNsYXNzIiwiQ2Fyb3VzZWwuc2V0SXRlbXNMb2NhdGlvbnMiLCJDYXJvdXNlbC5zZXRJdGVtTG9jYXRpb24iLCJDYXJvdXNlbC5nZXRDYWxjdWxhdGVkSXRlbUxvY2F0aW9uIiwiQ2Fyb3VzZWwuc2V0VGV4dEludmlzaWJsZVdoZW5Ob3RUYXJnZXRlZCIsIkNhcm91c2VsLm1ha2VDb250cm9scyIsIkNhcm91c2VsLmZpbGxUYXJnZXRlZENvbnRyb2wiXSwibWFwcGluZ3MiOiJBQUFBO0lBU0lBLGtCQUFZQSxPQUFvQkEsRUFBRUEsVUFBdUJBO1FBQ3JEQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNuQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRWpCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBRU9ELGtDQUFlQSxHQUF2QkE7UUFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFB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QSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN6Q0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFT1Ysc0NBQW1CQSxHQUEzQkE7UUFDSVcsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDdENBLElBQUlBLE9BQU9BLEdBQVlBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRW5EQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekNBLEtBQUtBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLEVBQUVBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7WUFDM0RBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSwwQkFBMEJBLENBQUNBLENBQUNBO1lBQ3hEQSxDQUFDQTtRQUNMQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNMWCxlQUFDQTtBQUFEQSxDQWxHQSxBQWtHQ0EsSUFBQSIsImZpbGUiOiJjYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhcm91c2VsIHtcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udHJvbGxlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpdGVtczogSFRNTENvbGxlY3Rpb247XG4gICAgcHJpdmF0ZSBpdGVtQ291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHRhcmdldEl0ZW06IG51bWJlcjtcbiAgICBwcml2YXRlIHRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIGxvb3A7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29udHJvbGxlcjogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5pdGVtQ291bnQgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy50YXJnZXRJdGVtID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gNjAwMDtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemVET00oKTtcbiAgICAgICAgdGhpcy5zdGFydFVwZGF0ZUxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0VXBkYXRlTG9vcCgpIHtcbiAgICAgICAgdGhpcy5sb29wID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVMb29wLCB0aGlzLnRpbWUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTG9vcChjYXJvdXNlbDogQ2Fyb3VzZWwpIHtcbiAgICAgICAgY2Fyb3VzZWwudGFyZ2V0SXRlbSsrO1xuICAgICAgICBjYXJvdXNlbC5zZXRJdGVtc0xvY2F0aW9ucygpO1xuICAgICAgICBjYXJvdXNlbC5zZXRUZXh0SW52aXNpYmxlV2hlbk5vdFRhcmdldGVkKCk7XG4gICAgICAgIGNhcm91c2VsLmZpbGxUYXJnZXRlZENvbnRyb2woKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVET00oKSB7XG4gICAgICAgIHRoaXMuYWRkQ2Fyb3VzZWxJdGVtQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtc0xvY2F0aW9ucygpO1xuICAgICAgICB0aGlzLm1ha2VDb250cm9scygpO1xuICAgICAgICB0aGlzLmZpbGxUYXJnZXRlZENvbnRyb2woKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENhcm91c2VsSXRlbUNsYXNzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIFV0aWxzLmFkZENsYXNzKHRoaXMuaXRlbXNbaV0sIFwiY2Fyb3VzZWwtaXRlbVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SXRlbXNMb2NhdGlvbnMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtTG9jYXRpb24odGhpcy5pdGVtc1tpXSwgaSwgdGhpcy5pdGVtQ291bnQsIHRoaXMudGFyZ2V0SXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEl0ZW1Mb2NhdGlvbihpdGVtOiBFbGVtZW50LCBpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG9mZnNldDogbnVtYmVyID0gdGhpcy5nZXRDYWxjdWxhdGVkSXRlbUxvY2F0aW9uKGluZGV4LCBsZW5ndGgsIHRhcmdldCkgKiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciB6SW5kZXg6IG51bWJlciA9IGxlbmd0aCArIHRoaXMuZ2V0Q2FsY3VsYXRlZEl0ZW1Mb2NhdGlvbihpbmRleCwgbGVuZ3RoLCB0YXJnZXQpO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibGVmdDogXCIgKyBvZmZzZXQudG9TdHJpbmcoKSArIFwicHg7IHotaW5kZXg6IFwiICsgekluZGV4ICsgXCI7XCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2FsY3VsYXRlZEl0ZW1Mb2NhdGlvbihpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICB2YXIgdmFsdWU6IG51bWJlciA9ICh0YXJnZXQgLSBpbmRleCkgJSBsZW5ndGg7XG4gICAgICAgIHZhciBtaWQ6IG51bWJlciA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgICAgIHJldHVybiAodmFsdWUgPD0gbWlkICYmIHZhbHVlID49IC1taWQpID9cbiAgICAgICAgICAgIHZhbHVlIDpcbiAgICAgICAgICAgICgodmFsdWUgPiBtaWQpID9cbiAgICAgICAgICAgICAgICAodmFsdWUgLSBsZW5ndGgpIDpcbiAgICAgICAgICAgICAgICAodmFsdWUgKyBsZW5ndGgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFRleHRJbnZpc2libGVXaGVuTm90VGFyZ2V0ZWQoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW06IEVsZW1lbnQgPSB0aGlzLml0ZW1zW2ldO1xuXG4gICAgICAgICAgICBpZiAoaSAhPT0gdGhpcy50YXJnZXRJdGVtICUgdGhpcy5pdGVtQ291bnQpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5hZGRDbGFzcyhpdGVtLCBcImNhcm91c2VsLXRleHQtaGlkZGVuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBVdGlscy5yZW1vdmVDbGFzcyhpdGVtLCBcImNhcm91c2VsLXRleHQtaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWtlQ29udHJvbHMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRyb2w6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBVdGlscy5hZGRDbGFzcyhjb250cm9sLCBcImNhcm91c2VsLWNvbnRyb2xcIik7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYXBwZW5kQ2hpbGQoY29udHJvbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbGxUYXJnZXRlZENvbnRyb2woKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRyb2w6IEVsZW1lbnQgPSB0aGlzLmNvbnRyb2xsZXIuY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmIChpICE9PSB0aGlzLnRhcmdldEl0ZW0gJSB0aGlzLml0ZW1Db3VudCkge1xuICAgICAgICAgICAgICAgIFV0aWxzLnJlbW92ZUNsYXNzKGNvbnRyb2wsIFwiY2Fyb3VzZWwtY29udHJvbC0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBVdGlscy5hZGRDbGFzcyhjb250cm9sLCBcImNhcm91c2VsLWNvbnRyb2wtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==