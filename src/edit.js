// prettier-ignore
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const postType = useSelect( ( select ) =>
		select( 'core/editor' ).getCurrentPostType()
	);
	//eslint-disable-next-line no-unused-vars
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label={ __( 'Post Subtitle', 'metadata-block' ) }
				// value= {}
				onChange={ ( value ) => {
					//eslint-disable-next-line no-console
					console.log( value );
				} }
			/>
		</div>
	);
}
