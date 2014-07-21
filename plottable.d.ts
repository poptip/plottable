/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        module Methods {
            function inRange(x: number, a: number, b: number): boolean;
            function addArrays(alist: number[], blist: number[]): number[];
            function intersection(set1: D3.Set, set2: D3.Set): D3.Set;
            function accessorize(accessor: any): IAccessor;
            function applyAccessor(accessor: IAccessor, dataSource: DataSource): (d: any, i: number) => any;
            function uniq(strings: string[]): string[];
            function createFilledArray(value: any, count: number): any[];
            function flatten<T>(a: T[][]): T[];
            function arrayEq<T>(a: T[], b: T[]): boolean;
            function objEq(a: any, b: any): boolean;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        module OpenSource {
            function sortedIndex(val: number, arr: number[]): number;
            function sortedIndex(val: number, arr: any[], accessor: IAccessor): number;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        class IDCounter {
            increment(id: any): number;
            decrement(id: any): number;
            get(id: any): number;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        class StrictEqualityAssociativeArray {
            set(key: any, value: any): boolean;
            get(key: any): any;
            has(key: any): boolean;
            values(): any[];
            keys(): any[];
            map(cb: (key?: any, val?: any, index?: number) => any): any[];
            delete(key: any): boolean;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        class Cache<T> {
            constructor(compute: (k: string) => T, canonicalKey?: string, valueEq?: (v: T, w: T) => boolean);
            get(k: string): T;
            clear(): Cache<T>;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        module Text {
            interface Dimensions {
                width: number;
                height: number;
            }
            interface TextMeasurer {
                (s: string): Dimensions;
            }
            function getTextMeasure(selection: D3.Selection): TextMeasurer;
            class CachingCharacterMeasurer {
                measure: TextMeasurer;
                constructor(g: D3.Selection);
                clear(): CachingCharacterMeasurer;
            }
            function getTruncatedText(text: string, availableWidth: number, measurer: TextMeasurer): string;
            function getTextHeight(selection: D3.Selection): number;
            function getTextWidth(textElement: D3.Selection, text: string): number;
            function _addEllipsesToLine(line: string, width: number, measureText: TextMeasurer): string;
            function writeLineHorizontally(line: string, g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string): {
                width: number;
                height: number;
            };
            function writeLineVertically(line: string, g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string, rotation?: string): {
                width: number;
                height: number;
            };
            function writeTextHorizontally(brokenText: string[], g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string): {
                width: number;
                height: number;
            };
            function writeTextVertically(brokenText: string[], g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string, rotation?: string): {
                width: number;
                height: number;
            };
            interface IWriteTextResult {
                textFits: boolean;
                usedWidth: number;
                usedHeight: number;
            }
            interface IWriteOptions {
                g: D3.Selection;
                xAlign: string;
                yAlign: string;
            }
            function writeText(text: string, width: number, height: number, tm: TextMeasurer, horizontally?: boolean, write?: IWriteOptions): IWriteTextResult;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        module WordWrap {
            interface IWrappedText {
                originalText: string;
                lines: string[];
                textFits: boolean;
            }
            function breakTextToFitRect(text: string, width: number, height: number, measureText: Text.TextMeasurer): IWrappedText;
            function canWrapWithoutBreakingWords(text: string, width: number, widthMeasure: (s: string) => number): boolean;
        }
    }
}

declare module Plottable {
    module Util {
        module DOM {
            function getBBox(element: D3.Selection): SVGRect;
            var POLYFILL_TIMEOUT_MSEC: number;
            function requestAnimationFramePolyfill(fn: () => any): void;
            function isSelectionRemovedFromSVG(selection: D3.Selection): boolean;
            function getElementWidth(elem: HTMLScriptElement): number;
            function getElementHeight(elem: HTMLScriptElement): number;
            function getSVGPixelWidth(svg: D3.Selection): number;
            function translate(s: D3.Selection, x?: number, y?: number): any;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class Formatter {
            _onlyShowUnchanged: boolean;
            _formatFunction: (d: any) => string;
            _precision: number;
            constructor(precision: number);
            format(d: any): string;
            _valueChanged(d: any, formattedValue: string): boolean;
            precision(): number;
            precision(value: number): Formatter;
            showOnlyUnchangedValues(): boolean;
            showOnlyUnchangedValues(showUnchanged: boolean): Formatter;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class Identity extends Plottable.Abstract.Formatter {
            constructor();
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class General extends Plottable.Abstract.Formatter {
            constructor(precision?: number);
            _valueChanged(d: any, formattedValue: string): boolean;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class Fixed extends Plottable.Abstract.Formatter {
            constructor(precision?: number);
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class Currency extends Fixed {
            constructor(precision?: number, symbol?: string, prefix?: boolean);
            format(d: any): string;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class Percentage extends Fixed {
            constructor(precision?: number);
            format(d: any): string;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class SISuffix extends Plottable.Abstract.Formatter {
            constructor(precision?: number);
            precision(): number;
            precision(value: number): SISuffix;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Formatter {
        class Custom extends Plottable.Abstract.Formatter {
            constructor(customFormatFunction: (d: any, formatter: Custom) => string, precision?: number);
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    interface FilterFormat {
        format: string;
        filter: (d: any) => any;
    }
    module Formatter {
        class Time extends Plottable.Abstract.Formatter {
            constructor();
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    var version: string;
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class PlottableObject {
            _plottableID: number;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Core {
        interface IListenable {
            broadcaster: Broadcaster;
        }
        interface IBroadcasterCallback {
            (listenable: IListenable, ...args: any[]): any;
        }
        class Broadcaster extends Plottable.Abstract.PlottableObject {
            listenable: IListenable;
            constructor(listenable: IListenable);
            registerListener(listener: any, callback: IBroadcasterCallback): Broadcaster;
            broadcast(...args: any[]): Broadcaster;
            deregisterListener(listener: any): Broadcaster;
            deregisterAllListeners(): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    class DataSource extends Plottable.Abstract.PlottableObject implements Plottable.Core.IListenable {
        broadcaster: any;
        constructor(data?: any[], metadata?: any);
        data(): any[];
        data(data: any[]): DataSource;
        metadata(): any;
        metadata(metadata: any): DataSource;
        _getExtent(accessor: IAccessor): any[];
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class Component extends PlottableObject {
            element: D3.Selection;
            content: D3.Selection;
            backgroundContainer: D3.Selection;
            foregroundContainer: D3.Selection;
            clipPathEnabled: boolean;
            _parent: ComponentContainer;
            availableWidth: number;
            availableHeight: number;
            xOrigin: number;
            yOrigin: number;
            _xAlignProportion: number;
            _yAlignProportion: number;
            _isSetup: boolean;
            _isAnchored: boolean;
            static AUTORESIZE_BY_DEFAULT: boolean;
            _anchor(element: D3.Selection): Component;
            _setup(): Component;
            _requestedSpace(availableWidth: number, availableHeight: number): ISpaceRequest;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): Component;
            _render(): Component;
            _scheduleComputeLayout(): Component;
            _doRender(): Component;
            _invalidateLayout(): void;
            renderTo(element: any): Component;
            resize(width?: number, height?: number): Component;
            autoResize(flag: boolean): Component;
            xAlign(alignment: string): Component;
            yAlign(alignment: string): Component;
            xOffset(offset: number): Component;
            yOffset(offset: number): Component;
            registerInteraction(interaction: Interaction): Component;
            classed(cssClass: string): boolean;
            classed(cssClass: string, addClass: boolean): Component;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
            merge(c: Component): Plottable.Component.Group;
            detach(): Component;
            remove(): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class ComponentContainer extends Component {
            _components: Component[];
            _anchor(element: D3.Selection): ComponentContainer;
            _render(): ComponentContainer;
            _removeComponent(c: Component): ComponentContainer;
            _addComponent(c: Component, prepend?: boolean): boolean;
            components(): Component[];
            empty(): boolean;
            detachAll(): ComponentContainer;
            remove(): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Component {
        class Group extends Plottable.Abstract.ComponentContainer {
            constructor(components?: Plottable.Abstract.Component[]);
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            merge(c: Plottable.Abstract.Component): Group;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): Group;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Component {
        interface IterateLayoutResult {
            colProportionalSpace: number[];
            rowProportionalSpace: number[];
            guaranteedWidths: number[];
            guaranteedHeights: number[];
            wantsWidth: boolean;
            wantsHeight: boolean;
        }
        class Table extends Plottable.Abstract.ComponentContainer {
            constructor(rows?: Plottable.Abstract.Component[][]);
            addComponent(row: number, col: number, component: Plottable.Abstract.Component): Table;
            _removeComponent(component: Plottable.Abstract.Component): Table;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): Table;
            padding(rowPadding: number, colPadding: number): Table;
            rowWeight(index: number, weight: number): Table;
            colWeight(index: number, weight: number): Table;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class Scale extends PlottableObject implements Plottable.Core.IListenable {
            _d3Scale: D3.Scale.Scale;
            broadcaster: any;
            _rendererAttrID2Extent: {
                [x: string]: any[];
            };
            constructor(scale: D3.Scale.Scale);
            _getAllExtents(): any[][];
            _getExtent(): any[];
            autoDomain(): Scale;
            _autoDomainIfAutomaticMode(): void;
            scale(value: any): any;
            domain(): any[];
            domain(values: any[]): Scale;
            _setDomain(values: any[]): void;
            range(): any[];
            range(values: any[]): Scale;
            copy(): Scale;
            updateExtent(rendererID: number, attr: string, extent: any[]): Scale;
            removeExtent(rendererID: number, attr: string): Scale;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        interface _IProjector {
            accessor: IAccessor;
            scale?: Scale;
        }
        interface IAttributeToProjector {
            [attrToSet: string]: IAppliedAccessor;
        }
        class Plot extends Component {
            _dataSource: DataSource;
            _dataChanged: boolean;
            renderArea: D3.Selection;
            element: D3.Selection;
            _colorAccessor: IAccessor;
            _animate: boolean;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            _ANIMATION_DURATION: number;
            _projectors: {
                [x: string]: _IProjector;
            };
            constructor();
            constructor(dataset: any[]);
            constructor(dataset: DataSource);
            _anchor(element: D3.Selection): Plot;
            remove(): void;
            dataSource(): DataSource;
            dataSource(source: DataSource): Plot;
            _onDataSourceUpdate(): void;
            project(attrToSet: string, accessor: any, scale?: Scale): Plot;
            _generateAttrToProjector(): IAttributeToProjector;
            _doRender(): Plot;
            _paint(): void;
            _setup(): Plot;
            animate(enabled: boolean): Plot;
            detach(): Plot;
            _applyAnimatedAttributes(selection: any, animatorKey: string, attrToProjector: IAttributeToProjector): any;
            animator(animatorKey: string): Plottable.Animator.IPlotAnimator;
            animator(animatorKey: string, animator: Plottable.Animator.IPlotAnimator): Plot;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Core {
        module RenderController {
            module RenderPolicy {
                interface IRenderPolicy {
                    render(): any;
                }
                class Immediate implements IRenderPolicy {
                    render(): void;
                }
                class AnimationFrame implements IRenderPolicy {
                    render(): void;
                }
                class Timeout implements IRenderPolicy {
                    _timeoutMsec: number;
                    render(): void;
                }
            }
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Core {
        module RenderController {
            var _renderPolicy: RenderPolicy.IRenderPolicy;
            function setRenderPolicy(policy: RenderPolicy.IRenderPolicy): any;
            function registerToRender(c: Plottable.Abstract.Component): void;
            function registerToComputeLayout(c: Plottable.Abstract.Component): void;
            function flush(): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Core {
        module ResizeBroadcaster {
            function resizing(): boolean;
            function clearResizing(): any;
            function register(c: Plottable.Abstract.Component): void;
            function deregister(c: Plottable.Abstract.Component): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Animator {
        interface IPlotAnimator {
            animate(selection: any, attrToProjector: Plottable.Abstract.IAttributeToProjector, plot: Plottable.Abstract.Plot): any;
        }
        interface IPlotAnimatorMap {
            [animatorKey: string]: IPlotAnimator;
        }
    }
}

declare module Plottable {
    interface IDataset {
        data: any[];
        metadata: IMetadata;
    }
    interface IMetadata {
        cssClass?: string;
        color?: string;
    }
    interface IAccessor {
        (datum: any, index?: number, metadata?: any): any;
    }
    interface IAppliedAccessor {
        (datum: any, index: number): any;
    }
    interface SelectionArea {
        xMin: number;
        xMax: number;
        yMin: number;
        yMax: number;
    }
    interface FullSelectionArea {
        pixel: SelectionArea;
        data: SelectionArea;
    }
    interface ISpaceRequest {
        width: number;
        height: number;
        wantsWidth: boolean;
        wantsHeight: boolean;
    }
    interface IPixelArea {
        xMin: number;
        xMax: number;
        yMin: number;
        yMax: number;
    }
    interface IExtent {
        min: number;
        max: number;
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    class Domainer {
        constructor(combineExtents?: (extents: any[][]) => any[]);
        computeDomain(extents: any[][], scale: Plottable.Abstract.QuantitiveScale): any[];
        pad(padProportion?: number): Domainer;
        addPaddingException(exception: any, key?: string): Domainer;
        removePaddingException(keyOrException: any): Domainer;
        addIncludedValue(value: any, key?: string): Domainer;
        removeIncludedValue(valueOrKey: any): Domainer;
        nice(count?: number): Domainer;
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class QuantitiveScale extends Scale {
            _d3Scale: D3.Scale.QuantitiveScale;
            _PADDING_FOR_IDENTICAL_DOMAIN: number;
            _userSetDomainer: boolean;
            constructor(scale: D3.Scale.QuantitiveScale);
            _getExtent(): any[];
            invert(value: number): number;
            copy(): QuantitiveScale;
            domain(): any[];
            domain(values: any[]): QuantitiveScale;
            _setDomain(values: any[]): void;
            interpolate(): D3.Transition.Interpolate;
            interpolate(factory: D3.Transition.Interpolate): QuantitiveScale;
            rangeRound(values: number[]): QuantitiveScale;
            clamp(): boolean;
            clamp(clamp: boolean): QuantitiveScale;
            ticks(count?: number): any[];
            tickFormat(count: number, format?: string): (n: number) => string;
            _niceDomain(domain: any[], count?: number): any[];
            domainer(): Domainer;
            domainer(domainer: Domainer): QuantitiveScale;
            _defaultExtent(): any[];
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Scale {
        class Linear extends Plottable.Abstract.QuantitiveScale {
            constructor();
            constructor(scale: D3.Scale.LinearScale);
            copy(): Linear;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Scale {
        class Log extends Plottable.Abstract.QuantitiveScale {
            constructor();
            constructor(scale: D3.Scale.LogScale);
            copy(): Log;
            _defaultExtent(): number[];
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Scale {
        class Ordinal extends Plottable.Abstract.Scale {
            _d3Scale: D3.Scale.OrdinalScale;
            constructor(scale?: D3.Scale.OrdinalScale);
            _getExtent(): any[];
            domain(): any[];
            domain(values: any[]): Ordinal;
            _setDomain(values: any[]): void;
            range(): number[];
            range(values: number[]): Ordinal;
            rangeBand(): number;
            innerPadding(): number;
            fullBandStartAndWidth(v: any): number[];
            rangeType(): string;
            rangeType(rangeType: string, outerPadding?: number, innerPadding?: number): Ordinal;
            copy(): Ordinal;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Scale {
        class Color extends Plottable.Abstract.Scale {
            constructor(scaleType?: string);
            _getExtent(): any[];
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Scale {
        class Time extends Plottable.Abstract.QuantitiveScale {
            _PADDING_FOR_IDENTICAL_DOMAIN: number;
            constructor();
            constructor(scale: D3.Scale.TimeScale);
            _setDomain(values: any[]): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Scale {
        class InterpolatedColor extends Plottable.Abstract.QuantitiveScale {
            constructor(colorRange?: any, scaleType?: string);
            colorRange(): string[];
            colorRange(colorRange: any): InterpolatedColor;
            scaleType(): string;
            scaleType(scaleType: string): InterpolatedColor;
            autoDomain(): InterpolatedColor;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        class ScaleDomainCoordinator {
            constructor(scales: Plottable.Abstract.Scale[]);
            rescale(scale: Plottable.Abstract.Scale): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class Axis extends Component {
            static TICK_MARK_CLASS: string;
            static TICK_LABEL_CLASS: string;
            axisElement: D3.Selection;
            _tickMarkContainer: D3.Selection;
            _tickLabelContainer: D3.Selection;
            _baseline: D3.Selection;
            _scale: Scale;
            _formatter: Formatter;
            _orientation: string;
            _width: any;
            _height: any;
            _computedWidth: number;
            _computedHeight: number;
            constructor(scale: Scale, orientation: string, formatter?: any);
            remove(): void;
            _isHorizontal(): boolean;
            _computeWidth(): number;
            _computeHeight(): number;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): Axis;
            _setup(): Axis;
            _getTickValues(): any[];
            _doRender(): Axis;
            _generateBaselineAttrHash(): {
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            };
            _generateTickMarkAttrHash(): {
                x1: any;
                y1: any;
                x2: any;
                y2: any;
            };
            _invalidateLayout(): void;
            width(): number;
            width(w: any): Axis;
            height(): number;
            height(h: any): Axis;
            formatter(): Formatter;
            formatter(formatter: any): Axis;
            tickLength(): number;
            tickLength(length: number): Axis;
            tickLabelPadding(): number;
            tickLabelPadding(padding: number): Axis;
            orient(): string;
            orient(newOrientation: string): Axis;
            showEndTickLabels(): boolean;
            showEndTickLabels(show: boolean): Axis;
            _hideEndTickLabels(): void;
            _hideOverlappingTickLabels(): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Axis {
        class Numeric extends Plottable.Abstract.Axis {
            _scale: Plottable.Abstract.QuantitiveScale;
            constructor(scale: Plottable.Abstract.QuantitiveScale, orientation: string, formatter?: any);
            _computeWidth(): number;
            _computeHeight(): number;
            _getTickValues(): any[];
            _doRender(): Numeric;
            tickLabelPosition(): string;
            tickLabelPosition(position: string): Numeric;
            showEndTickLabel(orientation: string): boolean;
            showEndTickLabel(orientation: string, show: boolean): Numeric;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Axis {
        class Category extends Plottable.Abstract.Axis {
            _scale: Plottable.Scale.Ordinal;
            constructor(scale: Plottable.Scale.Ordinal, orientation?: string, formatter?: any);
            _setup(): Category;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _getTickValues(): string[];
            _doRender(): Category;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): Plottable.Abstract.Axis;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Component {
        class Label extends Plottable.Abstract.Component {
            constructor(displayText?: string, orientation?: string);
            xAlign(alignment: string): Label;
            yAlign(alignment: string): Label;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _setup(): Label;
            text(): string;
            text(displayText: string): Label;
            _doRender(): Label;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): Label;
        }
        class TitleLabel extends Label {
            constructor(text?: string, orientation?: string);
        }
        class AxisLabel extends Label {
            constructor(text?: string, orientation?: string);
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Component {
        interface ToggleCallback {
            (datum: string, newState: boolean): any;
        }
        interface HoverCallback {
            (datum?: string): any;
        }
        class Legend extends Plottable.Abstract.Component {
            constructor(colorScale?: Plottable.Scale.Color);
            remove(): void;
            toggleCallback(callback: ToggleCallback): Legend;
            toggleCallback(): ToggleCallback;
            hoverCallback(callback: HoverCallback): Legend;
            hoverCallback(): HoverCallback;
            scale(scale: Plottable.Scale.Color): Legend;
            scale(): Plottable.Scale.Color;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): Legend;
            _requestedSpace(offeredWidth: number, offeredY: number): ISpaceRequest;
            _doRender(): Legend;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Component {
        class Gridlines extends Plottable.Abstract.Component {
            constructor(xScale: Plottable.Abstract.QuantitiveScale, yScale: Plottable.Abstract.QuantitiveScale);
            remove(): Gridlines;
            _setup(): Gridlines;
            _doRender(): Gridlines;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Util {
        module Axis {
            var ONE_DAY: number;
            function generateRelativeDateFormatter(baseValue: number, increment?: number, label?: string): (tickValue: any) => string;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class XYPlot extends Plot {
            xScale: Scale;
            yScale: Scale;
            constructor(dataset: any, xScale: Scale, yScale: Scale);
            project(attrToSet: string, accessor: any, scale?: Scale): XYPlot;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): XYPlot;
            _updateXDomainer(): XYPlot;
            _updateYDomainer(): XYPlot;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Plot {
        class Scatter extends Plottable.Abstract.XYPlot {
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.Scale);
            project(attrToSet: string, accessor: any, scale?: Plottable.Abstract.Scale): Scatter;
            _paint(): void;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Plot {
        class Grid extends Plottable.Abstract.XYPlot {
            colorScale: Plottable.Abstract.Scale;
            xScale: Plottable.Scale.Ordinal;
            yScale: Plottable.Scale.Ordinal;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Plottable.Scale.Ordinal, yScale: Plottable.Scale.Ordinal, colorScale: Plottable.Abstract.Scale);
            project(attrToSet: string, accessor: any, scale?: Plottable.Abstract.Scale): Grid;
            _paint(): void;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class BarPlot extends XYPlot {
            static DEFAULT_WIDTH: number;
            _bars: D3.UpdateSelection;
            _baseline: D3.Selection;
            _baselineValue: number;
            _barAlignmentFactor: number;
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            _isVertical: boolean;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Scale, yScale: Scale);
            _setup(): BarPlot;
            _paint(): void;
            baseline(value: number): BarPlot;
            barAlignment(alignment: string): BarPlot;
            selectBar(xValOrExtent: IExtent, yValOrExtent: IExtent, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: number, yValOrExtent: IExtent, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: IExtent, yValOrExtent: number, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: number, yValOrExtent: number, select?: boolean): D3.Selection;
            deselectAll(): BarPlot;
            _updateDomainer(scale: Scale): BarPlot;
            _generateAttrToProjector(): IAttributeToProjector;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Plot {
        class VerticalBar extends Plottable.Abstract.BarPlot {
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            _isVertical: boolean;
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.QuantitiveScale);
            _updateYDomainer(): VerticalBar;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Plot {
        class HorizontalBar extends Plottable.Abstract.BarPlot {
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            isVertical: boolean;
            constructor(dataset: any, xScale: Plottable.Abstract.QuantitiveScale, yScale: Plottable.Abstract.Scale);
            _updateXDomainer(): HorizontalBar;
            _generateAttrToProjector(): Plottable.Abstract.IAttributeToProjector;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Plot {
        class Line extends Plottable.Abstract.XYPlot {
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.Scale);
            _setup(): Line;
            _getResetYFunction(): (d: any, i: number) => any;
            _paint(): void;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Plot {
        class Area extends Line {
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.Scale);
            _setup(): Area;
            _onDataSourceUpdate(): void;
            _updateYDomainer(): Area;
            project(attrToSet: string, accessor: any, scale?: Plottable.Abstract.Scale): Area;
            _getResetYFunction(): IAppliedAccessor;
            _paint(): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Animator {
        class Null implements IPlotAnimator {
            animate(selection: any, attrToProjector: Plottable.Abstract.IAttributeToProjector, plot: Plottable.Abstract.Plot): any;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Animator {
        class Default implements IPlotAnimator {
            _durationMsec: Number;
            _delayMsec: Number;
            _easing: string;
            animate(selection: any, attrToProjector: Plottable.Abstract.IAttributeToProjector, plot: Plottable.Abstract.Plot): any;
            duration(): Number;
            duration(duration: Number): Default;
            delay(): Number;
            delay(delay: Number): Default;
            easing(): string;
            easing(easing: string): Default;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Animator {
        class IterativeDelay extends Default {
            _delayMsec: number;
            animate(selection: any, attrToProjector: Plottable.Abstract.IAttributeToProjector, plot: Plottable.Abstract.Plot): any;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Core {
        interface IKeyEventListenerCallback {
            (e: D3.Event): any;
        }
        module KeyEventListener {
            function initialize(): void;
            function addCallback(keyCode: number, cb: IKeyEventListenerCallback): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Abstract {
        class Interaction {
            hitBox: D3.Selection;
            componentToListenTo: Component;
            constructor(componentToListenTo: Component);
            _anchor(hitBox: D3.Selection): void;
            registerWithComponent(): Interaction;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class Click extends Plottable.Abstract.Interaction {
            constructor(componentToListenTo: Plottable.Abstract.Component);
            _anchor(hitBox: D3.Selection): void;
            _listenTo(): string;
            callback(cb: (x: number, y: number) => any): Click;
        }
        class DoubleClick extends Click {
            constructor(componentToListenTo: Plottable.Abstract.Component);
            _listenTo(): string;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class Mousemove extends Plottable.Abstract.Interaction {
            constructor(componentToListenTo: Plottable.Abstract.Component);
            _anchor(hitBox: D3.Selection): void;
            mousemove(x: number, y: number): void;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class Key extends Plottable.Abstract.Interaction {
            constructor(componentToListenTo: Plottable.Abstract.Component, keyCode: number);
            _anchor(hitBox: D3.Selection): void;
            callback(cb: () => any): Key;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class PanZoom extends Plottable.Abstract.Interaction {
            xScale: Plottable.Abstract.QuantitiveScale;
            yScale: Plottable.Abstract.QuantitiveScale;
            constructor(componentToListenTo: Plottable.Abstract.Component, xScale: Plottable.Abstract.QuantitiveScale, yScale: Plottable.Abstract.QuantitiveScale);
            resetZoom(): void;
            _anchor(hitBox: D3.Selection): void;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class Drag extends Plottable.Abstract.Interaction {
            origin: number[];
            location: number[];
            callbackToCall: (dragInfo: any) => any;
            constructor(componentToListenTo: Plottable.Abstract.Component);
            callback(cb?: (a: any) => any): Drag;
            _dragstart(): void;
            _drag(): void;
            _dragend(): void;
            _doDragend(): void;
            _anchor(hitBox: D3.Selection): Drag;
            setupZoomCallback(xScale?: Plottable.Abstract.QuantitiveScale, yScale?: Plottable.Abstract.QuantitiveScale): Drag;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class DragBox extends Drag {
            dragBox: D3.Selection;
            boxIsDrawn: boolean;
            _dragstart(): void;
            clearBox(): DragBox;
            setBox(x0: number, x1: number, y0: number, y1: number): DragBox;
            _anchor(hitBox: D3.Selection): DragBox;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class XDragBox extends DragBox {
            _drag(): void;
            _doDragend(): void;
            setBox(x0: number, x1: number): XDragBox;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class XYDragBox extends DragBox {
            _drag(): void;
            _doDragend(): void;
        }
    }
}

/// <reference path='../../reference.d.ts' />
declare module Plottable {
    module Interaction {
        class YDragBox extends DragBox {
            _drag(): void;
            _doDragend(): void;
            setBox(y0: number, y1: number): YDragBox;
        }
    }
}

/// <reference path='../reference.d.ts' />
declare module Plottable {
    module Template {
        class StandardChart extends Plottable.Component.Table {
            constructor();
            yAxis(y: Plottable.Abstract.Axis): StandardChart;
            yAxis(): Plottable.Abstract.Axis;
            xAxis(x: Plottable.Abstract.Axis): StandardChart;
            xAxis(): Plottable.Abstract.Axis;
            yLabel(y: Plottable.Component.AxisLabel): StandardChart;
            yLabel(y: string): StandardChart;
            yLabel(): Plottable.Component.AxisLabel;
            xLabel(x: Plottable.Component.AxisLabel): StandardChart;
            xLabel(x: string): StandardChart;
            xLabel(): Plottable.Component.AxisLabel;
            titleLabel(x: Plottable.Component.TitleLabel): StandardChart;
            titleLabel(x: string): StandardChart;
            titleLabel(): Plottable.Component.TitleLabel;
            center(c: Plottable.Abstract.Component): StandardChart;
        }
    }
}
