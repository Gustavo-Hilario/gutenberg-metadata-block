// prettier-ignore
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	//eslint-disable-next-line no-unused-vars
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	const subtitleValue = meta && meta._blocks_course_post_subtitle;

	const onSubtitleChange = ( value ) => {
		// Meta is an object, so we need to spread it first
		setMeta( { ...meta, _blocks_course_post_subtitle: value } );
	};

	return (
		<div { ...useBlockProps() }>
			{ subtitleValue || subtitleValue === '' ? (
				<TextControl
					label={ __( 'Post Subtitle', 'metadata-block' ) }
					value={ subtitleValue }
					onChange={ onSubtitleChange }
				/>
			) : (
				__( 'Metadata Field is not registered', 'metadata-block' )
			) }
		</div>
	);
}
