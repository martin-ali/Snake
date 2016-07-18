class FeedRenderer extends Renderer
{
    constructor(objectToRender, context)
    {
        super(objectToRender, context);

        this._renderers[feedTypesEnum.heart] = function (objectToRender, context)
        {
            // Implementation required
            context.fillRect(
                objectToRender.x,
                objectToRender.y,
                objectToRender.width,
                objectToRender.height
            );
        };

        this._renderers[feedTypesEnum.sphere] = function (objectToRender, context)
        {
            context.arc(
                objectToRender.x + objectToRender.width,
                objectToRender.y + objectToRender.height,
                // Coupling
                (objectToRender.width + objectToRender.height) / 2,
                0,
                2 * Math.PI
            );
        };
    }

    render()
    {
        this.context.save();

        this.context.fillStyle = 'rgb(230, 182, 44)';

        this.context.beginPath();
        this.renderers[this.objectToRender.type](this.objectToRender, this.context);
        this.context.fill();

        this.context.restore();
    }
}