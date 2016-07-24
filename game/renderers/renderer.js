class Renderer
{
    constructor(objectToRender, context, fillStyle = fillStyleEnum.fill)
    {
        this._objectToRender = objectToRender;
        this._context = context;
        this._renderers = {};
        this._fillStyle = fillStyle;
    }

    get fillStyle()
    {
        return this._fillStyle;
    }

    set fillStyle(value)
    {
        this._fillStyle = value;
    }

    get renderers()
    {
        return this._renderers;
    }

    get context()
    {
        return this._context;
    }

    set context(value)
    {
        this._context = value;
    }

    get objectToRender()
    {
        return this._objectToRender;
    }

    // TODO: Refactor
    render()
    {

        if (this.fillStyle === fillStyles.fillAndStroke)
        {
            this.context.fill();
            this.context.stroke();
        }
        else if (this.fillStyle === fillStyles.fill)
        {
            this.context.fill();
        }
        else if (this.fillStyle === fillStyles.stroke)
        {
            this.context.stroke();
        }
    }

    unrender()
    {

    }
}